import React, { Component } from 'react';
import Items from '../components/Items';
import Categories from '../components/Categories';
import FullItem from '../components/FullItem';

export class ShopM extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentItems: this.props.items, // Инициализация текущих элементов
			fullItem: false,  // Отвечает за отображение полного описания товара
			fullItems: {},    // Содержит данные текущего товара для полного описания
		};

		this.chooseCategory = this.chooseCategory.bind(this);
		this.onShowItem = this.onShowItem.bind(this);
	}

	// Фильтрация товаров по категории
	chooseCategory(category) {
		if (category === "all") {
			this.setState({ currentItems: this.props.items });
		} else {
			this.setState({
				currentItems: this.props.items.filter(el => el.category === category)
			});
		}
	}

	// Отображение полного описания товара
	onShowItem(item) {
		this.setState({ fullItems: item, fullItem: !this.state.fullItem });
	}

	render() {
		return (
			<><aside>
				<Categories chooseCategory={this.chooseCategory} />
			</aside>

				<main>
					<div>

						<Items onShowItem={this.onShowItem} items={this.state.currentItems} onAddToOrder={this.props.addToOrder} />
						{this.state.fullItem && <FullItem onAddToOrder={this.props.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItems} />}
					</div>
				</main></>
		)
	}
}

export default ShopM;

import React, { Component } from 'react';
import Items from '../components/Items';
import Categories from '../components/Categories';
import FullItem from '../components/FullItem';

export class ShopM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItems: [], // Текущие элементы после фильтрации
            fullItem: false,  // Показать ли полный вид элемента
            fullItems: {},    // Полная информация о текущем элементе
            orders: [],       // Заказы
            items: [          // Список всех элементов
                {
                    id: 1,
                    title: "Grey Chair",
                    img: "chair-grey.jpg",
                    desc: "The gray chairs in this range are available in a variety of styles, designs, and shades. From gray chairs with wooden frames to ones with armrests.",
                    category: "chairs",
                    price: "49.99"
                },
                {
                    id: 2,
                    title: "Modern Sofa",
                    img: "sofa-modern.jpg",
                    desc: "A comfortable modern sofa with a sleek design, perfect for contemporary living spaces. Available in various colors and fabrics.",
                    category: "sofas",
                    price: "299.99"
                },
                {
                    id: 3,
                    title: "Dining Table",
                    img: "table-wooden.jpg",
                    desc: "This elegant wooden dining table offers a timeless design and is built to last. Perfect for both formal dining rooms and casual kitchens.",
                    category: "tables",
                    price: "199.99"
                },
                {
                    id: 4,
                    title: "Stylish Lamp",
                    img: "lamp-stylish.jpg",
                    desc: "Add a touch of elegance to your room with this stylish lamp. Features a modern design and provides warm ambient lighting.",
                    category: "lighting",
                    price: "39.99"
                },
                {
                    id: 5,
                    title: "Office Desk",
                    img: "desk-office.jpg",
                    desc: "A sturdy office desk with ample workspace, designed for productivity and comfort. Comes with built-in storage drawers.",
                    category: "tables",
                    price: "149.99"
                }
            ]
        };

        this.state.currentItems = this.state.items; // Инициализация текущих элементов

        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowItem = this.onShowItem.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    // Фильтрация по категории
    chooseCategory(category) {
        if (category === "all") {
            this.setState({ currentItems: this.state.items });
        } else {
            this.setState({
                currentItems: this.state.items.filter(el => el.category === category)
            });
        }
    }

    // Показать полный вид элемента
    onShowItem(item) {
        this.setState({ fullItems: item, fullItem: !this.state.fullItem });
    }

    // Добавление в заказ
    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(el => {
            if (el.id === item.id) isInArray = true;
        });
        if (!isInArray)
            this.setState({ orders: [...this.state.orders, item] });
    }

    // Удаление из заказа
    deleteOrder(id) {
        this.setState({
            orders: this.state.orders.filter(el => el.id !== id)
        });
    }

    render() {
        return (
            <div>
                <Categories chooseCategory={this.chooseCategory} />
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAddToOrder={this.addToOrder} />
                {this.state.fullItem && <FullItem onAddToOrder={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItems} />}
            </div>
        );
    }
}

export default ShopM;

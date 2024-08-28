import React, { Component } from 'react'


export class FullItem extends Component {
    render() {
        const { item } = this.props;

        return (
            <div className="full-item">
                <div className='full-item-content'>
                    <div className="full-item-header">
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => this.props.onShowItem(this.props.item)} ></button>
                    </div>

                    <img src={"./img/" + item.img} alt={item.title} />
                    <h2>{item.title} </h2>
                    <p>{item.desc}</p>
                    <b>{item.price}$</b>
                    <div className="add-to-cart" onClick={() => this.props.onAddToOrder(item)}>+</div>
                </div>

            </div>
        )
    }
}

export default FullItem
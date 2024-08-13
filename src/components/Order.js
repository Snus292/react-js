import React, { Component } from 'react'

export class Order extends Component {
    render() {
        return (

            <><hr className="gradient-divider my-0 hidden md:flex mb-8"></hr>
                <div className="item">
                    <img src={"./img/" + this.props.item.img} alt="" />
                    <h2>{this.props.item.title}</h2>
                    <b>{this.props.item.price}$</b>
                </div></>




        )
    }
}

export default Order
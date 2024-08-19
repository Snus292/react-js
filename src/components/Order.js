import React, { Component } from 'react'
import { MdDeleteForever } from "react-icons/md";
export class Order extends Component {
    render() {
        return (

            <><hr className="gradient-divider my-0 hidden md:flex mb-8"></hr>
                <div className="item">
                    <div>
                        <MdDeleteForever className='delete-item' onClick={()=>this.props.onDeleteOrder(this.props.item.id)}></MdDeleteForever>
                    </div>
                    <img src={"./img/" + this.props.item.img} alt="" />
                    <h2>{this.props.item.title}</h2>
                    <b>{this.props.item.price}$</b>

                </div></>




        )
    }
}

export default Order
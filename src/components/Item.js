import React from "react";

class Item extends React.Component {
    render() {
        return (
            <div className="item">
                <img src={"./img/" + this.props.item.img} alt=""/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}$</b>
                <div className="add-to-cart" onClick={()=>this.props.onAddToOrder(this.props.item)}>+</div>
                
                
            </div>
        )
    }


}
export default Item
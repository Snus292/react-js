import React from "react";



class Item extends React.Component {
    render() {
        const { item,onShowItem,onAddToOrder } = this.props;

        
        return (
            <div className="item" >
                <img src={"./img/" + item.img} alt="" onClick={() => onShowItem(item)} />
                <h2 onClick={() => onShowItem(item)} >{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}$</b>
                <div className="add-to-cart" onClick={() => onAddToOrder(item)}>+</div>


            </div>
        )
    }


}
export default Item
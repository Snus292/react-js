import React from "react";
import Item from "./Item";

class Items extends React.Component {
    render() {
        const {items ,onAddToOrder} =this.props;
        return (
            <div className="items">
                {items.length > 0 ? (
                    items.map((item) => (
                        <Item key={item.id} item={item} onAddToOrder={onAddToOrder} />
                    ))
                ) : (
                    <div className="items">
                        <h3>There are not any items</h3>
                    </div>
                )}

            </div>
        )
    }


}
export default Items
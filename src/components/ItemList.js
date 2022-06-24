import React from "react";
import Item from "./Item";


function ItemList({ items }) {
    return (
        items.map(item => (
            <Item 
            key={item.id}
            title={item.title}
            price={item.price}
            pictureUrl={item.pictureUrl} 
            stock={item.stock}
            />
        ))
    )
}

export default ItemList;
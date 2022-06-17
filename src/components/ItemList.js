import React from "react";
import Item from "./Item";
import { items } from "./Item";

const MiPromesa = new Promise((resolve, reject) => {
    setTimeout(function() {if(items > 0) {
        resolve(items)
    } else {
        reject('Error al encontar items')
    }}, 2000)
})

MiPromesa.then((items) => {return (
    <div>
        {
            items.map((item) => (
                <Item key={item.id} {...item} />
            ))
        }
    </div>
)})

function ItemList() {
    return (
        <MiPromesa />
    )
}

export default ItemList;
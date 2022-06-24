import React, {useEffect, useState} from "react";
import MyPromise from "../utils/MyPromise";
import items from "../utils/Items";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [itemElegido, setItemElegido] = useState('')

    useEffect(() => {
        MyPromise(2000, items)
        .then(resolve => setItemElegido(resolve.find(props => props.id === 1)))
    }, )
    return (
        <>
        <div>
            <ItemDetail
            title={itemElegido.title}
            description={itemElegido.description}
            pictureUrl={itemElegido.pictureUrl}
            price={itemElegido.price}
            stock={itemElegido.stock}
            />
        </div>
        </>
    )
}

export default ItemDetailContainer;
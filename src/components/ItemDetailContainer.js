import React, {useEffect, useState} from "react";
import MyPromise from "../utils/MyPromise";
import items from "../utils/Items";
import GetItem from "../utils/GetItem";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [itemElegido, setItemElegido] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        GetItem()
        .then((resolve) => {
            resolve.find(() => setItemElegido(itemElegido))
        })

        MyPromise(2000, items)
        .then(products => setProducts(products))
    }, [products])
    return (
        <>
        <div>
            <ItemDetail 
            description={itemElegido.description}
            pictureUrl={itemElegido.pictureUrl}
            price={itemElegido.price}
            />
        </div>
        </>
    )
}

export default ItemDetailContainer;
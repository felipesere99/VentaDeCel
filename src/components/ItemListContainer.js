import React, { useEffect, useState } from "react";
import items from "../utils/Items";
import MyPromise from "../utils/MyPromise";
import ItemList from "./ItemList";
import style from '../css/ItemListContainer.module.css'
//import ItemDetailContainer from "./ItemDetailContainer";


const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        MyPromise(2000, items)
        .then(resultado => setProducts(resultado))
    }, [products])
    return (
        <>
        <div className={style.container}>
            {
                items.length? <ItemList items={products} /> : <h1>Loading...</h1>
            }
        </div>
        </>
    )
}

export default ItemListContainer
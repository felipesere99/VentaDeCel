
import React from "react";

const Modelo = (props) => {
        return (
            <p>{props.modelo}</p>
        )
    }
const Precio= (props) => {
    return (
        <p>{props.precio}</p>
    )
} 

const ItemListContainer = () => {
    return (
        <>
        <ul>
            <h1>Mas celulares proximamente</h1>
        </ul>
        </>
    )
}

export default ItemListContainer
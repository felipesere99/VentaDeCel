import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const ItemListContainer = (props) => {
    return (
        <>
        <div style={container}>
            <div style={info}>
                <ItemList />
            </div>
            <div>
                <ItemCount stock={5} initial={1}/>
            </div>
        </div>
        </>
    )
}

let container = {
    backgroundColor: 'steelblue',
    height: 300,
    width: 220,
    margin: 50,
}
let info = {
    height: 200,
    width: 160,
    margin: 10
}

export default ItemListContainer
import React, {useState, useEffect} from "react";

function ItemCount ({stock, initial, onAdd}) {
    const [item, setItem] = useState(parseInt(initial));

    useEffect(() => {
        if (item <= parseInt(stock)) setItem(item)
    },[] )


    return (
        <div>
            <div style={estilo1}>
            <button onClick={() => setItem(item + 1)} style={button}>+</button>
            <p style={p}>{item}</p>
            <button onClick={() => setItem(item - 1)} style={button}>-</button>
            </div>
            <div style={divCarro}>
            <button style={buttonCarro}>Agregar al carrito</button>
            </div>
        </div>
    )
}


let estilo1 = {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'relative'
}
let button = {
    height: 20,
    width: 20,
    fontSize: 'x-large',
    marginTop: 12,
    backgroundColor: 'steelblue',
    color: 'white',
    border: 'white',
    cursor: 'pointer'
}
let p = {
    padding: 'auto',
    color: 'white',
    display: 'flex'
}
let divCarro = {
    justifyContent: 'center',
    display: 'flex',
}
let buttonCarro = {
    backgroundColor: 'steelblue',
    color: 'white',
    border: 'white',
    cursor: 'pointer',
    fontSize: 'large',
}

export default ItemCount
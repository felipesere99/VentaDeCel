import React, {useState, useEffect} from "react";

function ItemCount ({stock, initial }) {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        console.log(count)
    })

    function sumar() {
        if (stock > count)  setCount(count + 1)
        else {setCount(count)}
        }

    function restar() {
        if (count > 0)  setCount(count - 1)
        else {setCount(count)}
        }

    return (
        <div>
            <div style={estilo1}>
            <button onClick={() => sumar()} style={button}>+</button>
            <p style={p}>{count}</p>
            <button onClick={() => restar()} style={button}>-</button>
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
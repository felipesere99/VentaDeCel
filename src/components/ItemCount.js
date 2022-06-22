import React, {useState} from "react";
import style from '../css/ItemCount.module.css'

function ItemCount ({stock, initial }) {
    const [count, setCount] = useState(initial);

    function sumar() {
        if (stock > count)  setCount(count + 1)
        }

    function restar() {
        if (count > 0)  setCount(count - 1)
        }

    return (
        <div>
            <div className={style.estilo1}>
            <button onClick={() => sumar()} className={style.button} >+</button>
            <p className={style.p}>{count}</p>
            <button onClick={() => restar()} className={style.button} >-</button>
            </div>
            <div className={style.divCarro}>
            <button className={style.buttonCarro}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
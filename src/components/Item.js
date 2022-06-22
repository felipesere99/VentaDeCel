import React from "react";
import style from '../css/Item.module.css';
import ItemCount from "./ItemCount";

function Item({title, price, pictureUrl, stock}) {
    return ( <>
        <div>
            <h2 className={style.modeloCel}>{title}</h2>
            <h3 className={style.precioCel}>U$S {price}</h3>
            <img className={style.imagenCel} src={pictureUrl} alt="imagenCel"/>
            <ItemCount stock={stock} initial={1} disabled={stock}/>
        </div>
            
    </>)
}

export default Item;
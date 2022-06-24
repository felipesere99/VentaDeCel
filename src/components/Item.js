import React from "react";
import style from '../css/Item.module.css';
import { Link } from 'react-router-dom';

function Item({title, price, pictureUrl, id}) {
    return ( <>
        <div className={style.itemlist}>
            <h2 className={style.modeloCel}>{title}</h2>
            <h3 className={style.precioCel}>U$S {price}</h3>
            <img className={style.imagenCel} src={pictureUrl} alt="imagenCel"/>
            <button className={style.detallesCel}><Link to={`/item/${id}`}>Detalles del producto</Link></button>
        </div>
    </>)
}

export default Item;
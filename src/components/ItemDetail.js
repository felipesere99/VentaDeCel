import React from "react";
import ItemCount from "./ItemCount";
import style from '../css/ItemDetail.module.css'

function ItemDetail({title, description, pictureUrl, price, stock}) {
    return(<>
        <div className={style.containerItemDetail}>
            <div className={style.subContainer}>
            <h2 className={style.modeloCel}>{title}</h2>
            <img className={style.imagenCel} src={pictureUrl} alt="imagenCel"/>
            <p className={style.description}>{description}</p>
            <p className={style.price}>U$S {price}</p>
            </div>
            <ItemCount stock={stock} initial={1}/>
        </div>
    </>)
}

export default ItemDetail;
import React from "react";

export const items = [{
    id: "111",
    title: "Iphone 11 128 GB",
    price: 1000,
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_668306-MLA46153270474_052021-O.jpg"
   },
   {
    id: "112",
    title: "Samsung s21 FE 5G",
    price: 800,
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_800895-MLA44849337131_022021-O.jpg"
   },
   {
    id: "113",
    title: "Huawei P40 Pro Dual",
    price: 900,
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_637087-MLA44156385787_112020-O.jpg"
   }]

function Item(items) {
   


    return ( <>
            <h2>{items.title}</h2>
            <h3>{items.price}</h3>
            <img src={items.pictureUrl} alt="imagenCel"/>
    </>)
}

export default Item;
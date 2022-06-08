import React from "react";

let carrito = {
    height: 70,
    width: 120,
    margin:50,
    borderRadius: 100,
    filter: 'brightness(1.1)',
    mixBlendMode: 'multiply',
    cursor: 'pointer'
}

export const CartWidget = () => {
    return( 
            <div >
                <img style={carrito} src="https://e7.pngegg.com/pngimages/218/165/png-clipart-computer-icons-shopping-cart-software-others-miscellaneous-logo.png"  alt="carro"/>
            </div>
    )
}
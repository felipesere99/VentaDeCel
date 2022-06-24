import React from "react";

let carrito = {
    height: '4rem',
    borderRadius: 100,
    filter: 'brightness(1.1)',
    mixBlendMode: 'multiply',
    cursor: 'pointer',
}
let container = {
    alignSelf: 'center'
}
const CartWidget = () => {
    return( 
            <div style={container}>
                <img style={carrito} src="https://e7.pngegg.com/pngimages/218/165/png-clipart-computer-icons-shopping-cart-software-others-miscellaneous-logo.png"  alt="carro"/>
            </div>
    )
}

export default CartWidget;
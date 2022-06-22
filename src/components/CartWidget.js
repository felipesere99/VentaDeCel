import React from "react";

let carrito = {
    height: '5rem',
    width: '7rem',
    borderRadius: 100,
    filter: 'brightness(1.1)',
    mixBlendMode: 'multiply',
    cursor: 'pointer'
}

const CartWidget = () => {
    return( 
            <div >
                <img style={carrito} src="https://e7.pngegg.com/pngimages/218/165/png-clipart-computer-icons-shopping-cart-software-others-miscellaneous-logo.png"  alt="carro"/>
            </div>
    )
}

export default CartWidget;
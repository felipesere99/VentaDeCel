import React from "react";
import CartWidget from './CartWidget.js'


export const NavBar = () => {
    return <>
            <nav style={navBar}>
                <div style={divLogo}>
                    <img style={logo} src="https://tienda.antel.com.uy/razuna/assets/1/C1E491498DD84E71960E4EE38E691C34/img/C7133CA320484B3B9AE5F788FC196A12/antel-fondoazul.png" alt="logo"/>
                </div>
                <div style={secciones}>
                    <a href="/#" className="hover" style={seccion}>Iphone</a>
                    <a href="/#" className="hover" style={seccion}>Samsung</a>
                    <a href="/#" className="hover" style={seccion}>Otros</a>
                </div>
                <CartWidget/>
            </nav>
            </>
};

let navBar = {
    backgroundColor: "steelblue",
    display: "flex",
    justifyContent: "space-around",
    width: '100%'
}
let divLogo = {
    display: "flex"
}
let logo = {
    margin: 'auto',
    height: 144,
    width: 223,
    borderRadius: 33,
    position: "relative"
}
let secciones = {
    margin: "auto",
    justifyContent: "space-around",
    position: "relative",
}
let seccion = {
    padding: 10, cursor: "pointer", fontSize: 25, fontFamily: "helvetica", border: '3px solid', margin:5, borderRadius: 16,   textDecorationLine: 'none'
}


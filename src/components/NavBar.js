import React from "react";
import {CartWidget} from './CartWidget.js'


export const NavBar = () => {
    return <>
            <nav style={navBar}>
                <div style={divLogo}>
                    <img style={logo} src="https://tienda.antel.com.uy/razuna/assets/1/C1E491498DD84E71960E4EE38E691C34/img/C7133CA320484B3B9AE5F788FC196A12/antel-fondoazul.png" alt="logo"/>
                </div>
                <div style={secciones}>
                    <a className="hover" style={seccion}>Iphone</a>
                    <a className="hover" style={seccion}>Samsung</a>
                    <a className="hover" style={seccion}>Otros</a>
                </div>
                <CartWidget/>
            </nav>
            </>
};

let navBar = {
    backgroundColor: "steelblue",
    display: "flex",
    justifyContent: "space-around",
}
let divLogo = {
    display: "flex"
}
let logo = {
    margin: 12,
    marginRight: 550,
    height: 144,
    width: 223,
    borderRadius: 33,
}
let secciones = {
    margin: "auto",
    justifyContent: "space-around",
    position: "relative",
}
let seccion = {
    padding: 10, cursor: "pointer", right: 77, fontSize: 25, fontFamily: "helvetica", border: '3px solid', margin:5, borderRadius: 16,
}


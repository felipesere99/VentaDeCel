import React from "react";

let container = {
    backgroundColor: "steelblue",
    display: "flex",
    justifyContent: "space-around",
    flex: 1,
}

let secciones = {
    margin: 33,
    display: "flex",
    justifyContent: "space-around",
}

export const NavBar = () => {
    return <>
            <div style={container}>
                <div>
                    <h1>Tienda Online de Celulares</h1>
                </div>
                <div style={secciones}>
                    <div style={{margin: 10, cursor: "pointer"}}>Iphone</div>
                    <div style={{margin: 10, cursor: "pointer"}}>Samsung</div>
                    <div style={{margin: 10, cursor: "pointer"}}>Otros</div>
                </div>
            </div>
            </>
};




import React from "react";

class Modelo extends React.Component {
    render () {
        return (
            <h1>{this.props.valor}</h1>
        )
    }
}

class Articulos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            celulares: ['Iphone XS', 'Samsung S22', 'Huawei Y9']
        }
    }


    render () {
        const modelos = this.state.celulares.map( t => (
            <Modelo valor={t} />
        ))

        return (
        <div>
            <ul>{modelos}</ul>
        </div>
   
    )
}
}
export default Articulos;
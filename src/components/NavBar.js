import React from "react";
import CartWidget from './CartWidget.js'
import style from '../css/NavBar.module.css'
import { Link } from 'react-router-dom'
import items from "../utils/Items.js";

const NavBar = () => {
    return <>
            <nav className={style.navBar}>
                <div className={style.divLogo}>
                    <Link to="/">
                        <img className={style.logo} src="https://tienda.antel.com.uy/razuna/assets/1/C1E491498DD84E71960E4EE38E691C34/img/C7133CA320484B3B9AE5F788FC196A12/antel-fondoazul.png" alt="logo"/>
                    </Link>
                </div>
                <div className={style.secciones}>
                    <a href="/#" className={style.seccion}><Link to={`/category/${items.category}`}>Iphone</Link></a>
                    <a href="/#" className={style.seccion}><Link to={`/category/${items.category}`}>Samsung</Link></a>
                    <a href="/#" className={style.seccion}><Link to={`/category/${items.category}`}>Otros</Link></a>
                </div>
                <CartWidget/>
            </nav>
            </>
};

export default NavBar
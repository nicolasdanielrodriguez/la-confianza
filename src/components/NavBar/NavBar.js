import React from 'react'
import './NavBar.css'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import {Routes , Route, Link} from 'react-router-dom'
import Catalogo from '../../pages/Catálogo';
import Home from '../../pages/Home';
import Detalle from '../../pages/Detalle';
export default function NavBar (){
return (
    <nav>
        <div >
            <Link to={'/'}><img class="logoContainer" src={process.env.PUBLIC_URL + "assets/logo.png"} alt="logo"/></Link>
        </div>
        <ul className="ulNavBar">    
            <li><Link to={'/'}><Button variant="contained">HOME</Button></Link></li>
            <li><Link to={'/category'}><Button variant="contained">Categorías</Button></Link></li>
            <li><Link to={'/item'}><Button variant="contained">Items</Button></Link></li>
            <li><Link to={'/cart'}><Button variant="contained">Cart</Button></Link></li>
        </ul>    
        <CartWidget/>
        
    </nav>
)

}
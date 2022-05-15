import React from 'react'
import './NavBar.css'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import {Routes , Route, Link, NavLink} from 'react-router-dom'
export default function NavBar (){
return (
    <nav>
        <div >
            <Link to={'/'}><img class="logoContainer" src={process.env.PUBLIC_URL + "assets/logo.png"} alt="logo"/></Link>
        </div>
        <ul className="ulNavBar">    
            <li><NavLink to={'/'}><Button variant="contained">HOME</Button></NavLink></li>
            <li><NavLink to={'/category/Simples'}><Button variant="contained">Simples</Button></NavLink></li>
            <li><NavLink to={'/category/Rellenas'}><Button variant="contained">Rellenas</Button></NavLink></li>
            <li><NavLink to={'/cart'}><Button variant="contained">Cart</Button></NavLink></li>
        </ul>    
        <CartWidget/>
        
    </nav>
)

}
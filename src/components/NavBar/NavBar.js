import React from 'react'
import './NavBar.css'
import Button from '@mui/material/Button';



export default function NavBar (){
return (
    <nav>
        <div >
            <img class="logoContainer" src={process.env.PUBLIC_URL + "assets/logo.png"} alt="logo"/>
        </div>
        <ul className="ulNavBar">
            <li><a><Button variant="contained">HOME</Button></a></li>
            <li><a><Button variant="contained">Productos</Button></a></li>
            <li><a><Button variant="contained">Nosotros</Button></a></li>
            <li><a><Button variant="contained">Contacto</Button></a></li>
            
        </ul>    
    </nav>
)

}
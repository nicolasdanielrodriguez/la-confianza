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
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalogo' element={<Catalogo/>}/>
            <Route path='/detalle' element={<Detalle/>}/>
        </Routes>
            
            <li><Link to={'/'}><Button variant="contained">HOME</Button></Link></li>
            <li><Link to={'/catalogo'}><Button variant="contained">Catálogo</Button></Link></li>
            <li><Link to={'/detalle'}><Button variant="contained">Detalle</Button></Link></li>
           
            
        </ul>    
        <CartWidget/>
    </nav>
)

}
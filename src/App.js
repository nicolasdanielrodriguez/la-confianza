import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import './components/NavBar/NavBar.css'
import Home from './pages/Home';
import Catalogo from './pages/Catálogo';
import Detalle from './pages/Detalle';
import {Routes , Route, Link} from 'react-router-dom'
import Cart from './pages/Cart';
import { CartContexProvider } from './components/CartContext';


function App() {
  
  return (
    <div className="App">
      <CartContexProvider>
     <NavBar/>
     <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category' element={<Catalogo/>}/>
            <Route path='/item' element={<Detalle/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </CartContexProvider>
    </div>
  );
}
export default App;


//<Item nombre='Agnolottis' id= '1' precio= '$190'/>
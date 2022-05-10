import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import './components/NavBar/NavBar.css'
import ListItemContainer from './components/ItemListContainer';
import Body from './components/BuyButton'
import ItemCount from './components/ItemCount';
import Item from './components/Item/Item';
import ComplexGrid from './components/Item/Item';
import ListItem from './components/ListItem/ListItem';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './pages/Home';
import Catalogo from './pages/Catálogo';
import Detalle from './pages/Detalle';
import {Routes , Route, Link} from 'react-router-dom'




function App() {
  
  return (
    <div className="App">
     
     
     <NavBar/>
     <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/:categoryId' element={<Catalogo/>}/>
            <Route path='/item/:id' element={<Detalle/>}/>
        </Routes>
     

     
    </div>
  );
}
export default App;


//<Item nombre='Agnolottis' id= '1' precio= '$190'/>
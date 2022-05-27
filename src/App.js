import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import './components/NavBar/NavBar.css'
import {Routes , Route, Link} from 'react-router-dom'
import Cart from './pages/Cart';
import { CartContexProvider } from './components/CartContext';
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer';
import CheckOut from './pages/Checkout';


function App() {
  
  return (
    <div className="App">
    <CartContexProvider>
      <NavBar/>
      <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
    </CartContexProvider>
    </div>
  );
}
export default App;

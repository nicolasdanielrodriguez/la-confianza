import React, {useContext} from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartContext from '../../components/CartContext';
import ItemList from '../../components/ItemList/ItemList';


function Cart() {
  const cartCtx = useContext(CartContext);
  console.log (cartCtx.getTotalPrice + "price")
  console.log (cartCtx.getCartQuantity + "quantity")
  return (
    <>
    {cartCtx.products.length !== 0 ?
    <div>
        <ItemList items={cartCtx.products}/>
          <Link to={'/checkout'}><button>Terminar compra por ${cartCtx.getTotalPrice()}</button></Link> 
          </div> :
          <>
          <h2>No hay productos</h2>
          <Link to={'/'}>Volver al inicio</Link>
          </>
                  }     
  

              
    </>
  )
}

export default Cart
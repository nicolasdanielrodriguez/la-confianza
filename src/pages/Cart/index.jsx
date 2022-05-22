import React, {useContext} from 'react'
import CartContext from '../../components/CartContext';
import ItemList from '../../components/ItemList/ItemList';


function Cart() {
  const cartCtx = useContext(CartContext);
  console.log (cartCtx.products)
  return (
    <>
        
   <ItemList items={cartCtx.products}/>

              
    </>
  )
}

export default Cart
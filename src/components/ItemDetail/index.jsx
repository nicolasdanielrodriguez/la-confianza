import React from 'react'
import CartContext from '../CartContext';
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './Design.css'




function ItemDetail({ item }) {
  const cartCtx = useContext(CartContext);

  function addHandler(quantityToAdd) {
      cartCtx.addProduct({quantity: quantityToAdd, ...item});
  }

  return (
  <div>
      <div>
          <div className="itemDetail-img">
              <img src={ item.url } alt='Imagen del producto' />
          </div>
      </div>
      <div className='right'>
          <div className='info-container'>
              <h2>{ item?.nombre }</h2>
              <p>${ item?.precio }</p>
              <div>
                  <ItemCount stock={5} initial={0} onAdd={addHandler}/>
                  <button onClick={() => console.log(cartCtx.products)} >Imprimir carrito</button>
                  <button onClick={() => cartCtx.removeProduct(item.id)} >Remove product</button>
                  <button onClick={() => cartCtx.clear()} >Clear</button>
                  <button onClick={() => console.log(cartCtx.isInCart(item.id))} >Is in cart</button>
                  <button onClick={() => console.log(cartCtx.getCartQuantity())} >Quantity</button>
                  {cartCtx.products.length &&
                      <button onClick={() => console.log(cartCtx)}>
                          <Link to='/cart'>
                              Terminar compra ({ cartCtx.getCartQuantity() } items)
                          </Link>
                      </button>
                  }
              </div>
          </div>
      </div>
  </div>
  )
}

export default ItemDetail
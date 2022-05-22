import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, {useContext} from 'react';
import CartContext from '../CartContext';



const CartWidget = () => {
    const cartCtx = useContext(CartContext);
    const products = [cartCtx.products]
    
    console.log (products)
    return (
        <div class= "Cart-Container">
            
          <button>
              <ShoppingCartIcon/>
              {cartCtx.getCartQuantity()}
          </button>
        
            
        </div>
    )
    };
    export default CartWidget;
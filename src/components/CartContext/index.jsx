import { createContext, useState } from "react";
import React from "react";

const CartContext = createContext ({
    products :[]
})

export const CartContexProvider = ({children}) =>{

    const [productsList,setProductsList] = useState()

    const addProduct = (product) => {
        setProductsList ([product, ...productsList]);
    }

    return (
        <CartContext.Provider value={{
            products: productsList,
            addProduct: addProduct,
        }}>
            {children}

        </CartContext.Provider>
    )

}

export default CartContext
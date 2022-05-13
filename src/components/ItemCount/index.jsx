import React, { useState } from 'react'


export default function ({stock,initial, onAdd}) {
const [count,setcount] = useState (initial)  
function handlePlusButton (){
  if (count < stock){
    setcount (count+1)
  }
  }
function handleMinusButton (){
if (count > 0){
  setcount (count-1)
}
}
return (
      <>
    <p>El stock es de {stock} </p>
    <button>clickeado {count} vez o veces</button>
    <button onClick={()=> handlePlusButton ()}>+</button>
    <button onClick={()=> handleMinusButton()}>-</button>
    <button onClick={() => (count <= stock) && onAdd (count) }> Agregar al carrito</button> 
    </>
  )
}
 
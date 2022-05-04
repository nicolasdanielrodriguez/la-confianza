import React from 'react'

function ItemDetail(items) {
  return (
      <>
      <h1>{items.nombre}</h1>
      <p>{items.id}</p>
        <p>{items.precio}</p>
        <img src={items.url} alt="" />
        </>
  )
}

export default ItemDetail
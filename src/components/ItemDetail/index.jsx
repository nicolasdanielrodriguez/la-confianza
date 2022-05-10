import React from 'react'

function ItemDetail({ product }) {
  
  
  const { nombre, id, precio, url } = product;
  console.log("product en Detail", product);
  return (
    <>
      
      <h1>{nombre}</h1>
      <p>{id}</p>
      <p>{precio}</p>
      <img src={url} alt="" />
    </>
  );
}

export default ItemDetail
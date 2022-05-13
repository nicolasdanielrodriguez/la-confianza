import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount';
import ItemDetail from '../ItemDetail';
import Button from '@mui/material/Button';


function getItems() {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        nombre: "Fideos",
        precio: "$150",
        url: "./assets/fideos.png",
      },
    ];
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

function ItemDetailContainer() {
  
  
  const [cantidadproductos, setcantidadproductos] = useState (null)
  function AddHandler (quantityToAdd) {
    setcantidadproductos (quantityToAdd)
  }

  const [oneProduct, setOneProduct] = useState([]);
  console.log("OneProduct", oneProduct);
  useEffect(() => {
    getItems().then((res) => {
      setOneProduct(res);
    });
  }, []);

  return (
    <>
      {oneProduct.map((product) => {
        return <ItemDetail key={product.id} product={product} />;
      })}
      
        <ItemCount stock='5' initial={0} onAdd={AddHandler}/>
        <Link to={'/cart'}><button>Tenes {cantidadproductos} productos en el carrito</button></Link>
       
        
      
    </>
  );


}

export default ItemDetailContainer;
import React, { useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import ItemCount from '../../components/ItemCount';
import ItemDetail from '../../components/ItemDetail';
import Button from '@mui/material/Button';


function getItems(id) {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        nombre: 'Fideos',
        precio: '$150',
        url: './assets/fideos.png'
      },
      {
        id: 2,
        nombre: 'Agnolotti',
        precio: '$600',
        url: './assets/Agnolotti.png'
      },
      {
        id: 3,
        nombre: 'Ravioles',
        precio: '$350',
        url: './assets/ravioles.png'
      }
    ];

    const item = productsList.filter (item => item.id == id)
    setTimeout(() => {
      resolve(item [0]);
    }, 2000);
  });
  return myPromise;
}

function ItemDetailContainer() {
  
  const { id } = useParams()
  const [cantidadproductos, setcantidadproductos] = useState (null)
  function AddHandler (quantityToAdd) {
    setcantidadproductos (quantityToAdd)
  }

  const [oneProduct, setOneProduct] = useState([]);
  console.log("OneProduct", oneProduct);
  useEffect(() => {
    getItems(id).then((res) => {
      setOneProduct(res);
    });
  }, [id]);
  return (
    <>
        <ItemDetail item={oneProduct} />
       
       
    </>
  );
}
export default ItemDetailContainer;
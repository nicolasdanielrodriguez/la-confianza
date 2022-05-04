import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';

function getItems() {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        nombre: 'Fideos',
        precio: '$150',
        url: './assets/fideos.png'
      }
    ];
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

function ItemDetailContainer() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItems()
      .then(res => {
        setProducts(res);
      })
  }, []);
console.log ({products})
  return (
    <div>
      <ItemDetail items={products}/>
       
    </div>
  )
}

export default ItemDetailContainer
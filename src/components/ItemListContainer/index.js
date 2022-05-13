import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../CartContext';
import ItemDetail from '../ItemDetail';
import ItemList from '../ItemList/ItemList';
import ListItem from '../ItemList/ItemList';

function getProducts() {
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
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}


/*
useEffect(() => {
console.log(CrtCtx.products)
}, [])*/

function ItemListContainer() {


  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res);
      })
  }, []);
  console.log({products})

  return (
    <div className='list-item-container'>
      <ItemList items={products}/> 
    </div>

  )
}

export default ItemListContainer

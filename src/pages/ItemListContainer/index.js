import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../components/CartContext';
import ItemDetail from '../../components/ItemDetail';
import ItemList from '../../components/ItemList/ItemList';
import ListItem from '../../components/ItemList/ItemList';

function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        nombre: 'Fideos',
        precio: 150,
        url: './assets/fideos.png',
        category: 'Simples',
      },
      {
        id: 2,
        nombre: 'Agnolotti',
        precio: 600,
        url: './assets/Agnolotti.png',
        category: 'Rellenas'
      },
      {
        id: 3,
        nombre: 'Ravioles',
        precio: 350,
        url: './assets/ravioles.png',
        category: 'Rellenas'
      }
    ];
    const productsFiltered = category ? productsList.filter(products => products.category === category) : productsList;
    setTimeout(() => {
      resolve(productsFiltered);
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
  const {categoryId} = useParams()
 
  useEffect(() => {
    getProducts(categoryId)
      .then(res => {
        setProducts(res);
      })
  }, [categoryId]);
  console.log({products})

  return (
    <div className='list-item-container'>
      <ItemList items={products}/> 
    </div>

  )
}

export default ItemListContainer

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../components/CartContext';
import ItemDetail from '../../components/ItemDetail';
import ItemList from '../../components/ItemList/ItemList';
import ListItem from '../../components/ItemList/ItemList';
import {collection, query, where, limit, getDocs, getFirestore} from 'firebase/firestore'


/*
useEffect(() => {
console.log(CrtCtx.products)
}, [])*/




  
function getProducts(category) {
  const db = getFirestore();

  const itemCollection = collection(db, 'items');

  const q = query(
    itemCollection
  );

  return getDocs(q)
}

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    

    getProducts(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        }));
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrio un error, revisar la consola!');
      });
  }, [categoryId]);
  return (
    <div className='list-item-container'>
      <ItemList items={products}/> 
    </div>

  )
}

export default ItemListContainer

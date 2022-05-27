import React, { useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import ItemCount from '../../components/ItemCount';
import ItemDetail from '../../components/ItemDetail';
import Button from '@mui/material/Button';
import {collection, query, where, limit, getDoc, getFirestore, doc} from 'firebase/firestore'


function getItems(id) {
  const db = getFirestore();

  const itemRef = doc (db, 'items', id);

  return getDoc(itemRef)
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
    getItems(id)
      .then((snapshot) => {
      setOneProduct({...snapshot.data(), id: snapshot.id});
    });
  }, [id]);
  return (
    <>
        <ItemDetail item={oneProduct} />
       
       
    </>
  );
}
export default ItemDetailContainer;
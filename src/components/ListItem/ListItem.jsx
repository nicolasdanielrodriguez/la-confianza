import React from 'react'
import ComplexGrid from '../Item/Item'

function ListItem() {
    const itemList = [
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
    ]
    return (
      <div className='list-item-container'>
          {itemList.map((item) => <ComplexGrid item={item} key={item.id} />)}
      </div>
    )
  }
  
  export default ListItem
  
/* function GetProducts () {

      const myPromise = new Promise ((resolve, reject) => {
          const products = [
              {id: 4, producto: 'rigatti', precio: '$130'},
              {id: 5, producto: 'chocolate', precio: '$150'},
          ];
          setTimeout (() => {
              resolve (products);
   
          }, 3000);
    return myPromise; */
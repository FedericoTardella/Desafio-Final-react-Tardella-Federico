import React from 'react';
import Item from './Item'
import './ItemList.css'

export default function ItemList({ productos }) {
  return (
    <div className='contenedor'>
      {productos.map((productos) => (
        <Item key={productos.id} productos={productos} />
      ))}
    </div>
  )
}

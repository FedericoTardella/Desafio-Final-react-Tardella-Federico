import React from 'react'
import './data.js'
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }){
    return (
      <div className="tarjeta">
        <div>
          <img className="productot" src={producto.imgUrl} alt={producto.nombre}></img>
        </div>
        <div>
          <h4>{producto.nombre}</h4>
        </div>
        <div>
          <p>{producto.desc}</p>
        </div>
        <div>
          <p>Categoria: {producto.categoria}</p>
        </div>
        <div>
        <p>Stock: {producto.stock}</p>
      </div>
        <div>
          <p>${producto.precio}</p>
        </div>
        <ItemCount producto={producto} />
      </div>
  );
}
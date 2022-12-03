import React from 'react'
import './Item.css'
import {Link} from "react-router-dom"


export default function Item({productos}){
  return (
    <>
      <div className="tarjeta">
        <div>
          <img className="productot" src={productos.imgUrl} alt={productos.nombre}></img>
        </div>
        <div>
          <h4>{productos.nombre}</h4>
        </div>
        <div>
          <p>{productos.desc}</p>
        </div>
        <div>
          <p>Categoria: {productos.categoria}</p>
        </div>
        <div>
          <p>${productos.precio}</p>
        </div>
        <div>
        <Link to={"/item/" + productos.id}><button>Comprar</button></Link>
        </div>
      </div>
      <br />
    </>
  )
}

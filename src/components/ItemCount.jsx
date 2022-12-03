import React, {useContext, useEffect, useState} from 'react';
import './ItemCount.css'
import { CarritoContexto } from '../CarritoContextoComponente';

export default function ItemCount ({producto}) {
    const [count, setCount] = useState(1);
    const {carrito, agregarAlCarrito} = useContext(CarritoContexto)

    function sumar(){
        if (count < producto.stock){
            setCount(count + 1) 
        }
    }
    function restar(){
        if (count > 1) {
            setCount(count - 1)
        }
    }
    function agregar(){
    agregarAlCarrito(producto, count);
    }

    useEffect(() => {
        console.log(carrito);
    }, [carrito]);
    return (
        <div>
            <button onClick={restar}>-</button>
            {count}
            <button onClick={sumar}>+</button>
            <button onClick={agregar}>AGREGAR AL CARRITO</button>
        </div>
    );
};


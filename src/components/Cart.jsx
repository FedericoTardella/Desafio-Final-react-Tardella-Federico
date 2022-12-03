import React, { useContext} from 'react';
import { CarritoContexto } from '../CarritoContextoComponente';
import { Link } from 'react-router-dom';
import './Cart.css'

export default function Cart() {
    const {carrito, totalCount, precioTotal, borrarDelCarrito} = useContext(CarritoContexto);

    return (
        <>
            {carrito.map((item) => (
                <div className='divproducto' key={item.id}>
                    {item.nombre + ", cantidad: " + item.count}{" "}
                    <button onClick={() => borrarDelCarrito(item.id)}>Eliminar</button>
                </div>
            ))}
            <div className='style'>
                <div>
                    Tenes en el carrito {totalCount} productos. 
                    <p>El precio de la compra es de ${precioTotal}</p>
                </div>
                <Link to="/Checkout" >Click aqui para terminar compra</Link>
            </div>

        </>
    )
}

import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const CarritoContexto = createContext();

export default function CarritoContextoComponente({children}) {
    const [carrito, setCarrito] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    function agregarAlCarrito(item, count){
        
        const carritoAux = [...carrito];

        let encontradoEnCarrito = false;

        for (let i = 0; i < carrito.length; i++){
            // eslint-disable-next-line eqeqeq
            if (carritoAux[i].id == item.id) {
                carritoAux[i].count = carritoAux[i].count + count;
                encontradoEnCarrito = true;

            }
        }

        if (!encontradoEnCarrito) {
            carritoAux.push({ ...item, count});
        }

        setCarrito(carritoAux);
    }

    function borrarDelCarrito(id){
        setCarrito(carrito.filter(item => item.id !== id))
    }
    useEffect(() => {
        setTotalCount(carrito.reduce((acc, item) => acc + item.count, 0));
        setPrecioTotal(carrito.reduce((acc, item) => acc + item.count * item.precio, 0));
    }, [carrito]);

    useEffect(() => {
        console.log(precioTotal)
    }, [precioTotal]);

    return (
        <CarritoContexto.Provider value={{carrito, agregarAlCarrito,precioTotal, totalCount, setPrecioTotal, borrarDelCarrito}}>
            {children}
        </CarritoContexto.Provider>
    )
}

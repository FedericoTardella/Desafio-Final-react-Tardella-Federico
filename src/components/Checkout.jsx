import React, { useContext, useState } from 'react'
import { CarritoContexto } from '../CarritoContextoComponente';
import { addDoc, collection, getFirestore, } from 'firebase/firestore';
import './Checkout.css'

export default function Checkout() {
    const {precioTotal, carrito} = useContext(CarritoContexto)
    const [nombre, setNombre] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    function validarFormulario(){
        const order = {
            buyer: {nombre, tel, email},
            precioTotal,
            carrito,
        };
        console.log(order)
        const db = getFirestore();
        const orders = collection(db, 'orders')
        addDoc(orders, order).then(({id}) => {
            setOrderId(id);
        });
    }
    return (
        <>
            {orderId ? ( 
                "Gracias por tu compra. Tu id de compra es: " + orderId
                ) : (
        <div className='checkout'>
            <h2>Ingrese sus datos para terminar la compra correctamente</h2><br />
            <input type="text" placeholder='Nombre y Apellido'  onChange={(e) => setNombre(e.target.value)} required/><br />
            <input type="text" placeholder='Telefono' onChange={(e) => setTel(e.target.value)} required/><br />          
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/><br />
            <button onClick={validarFormulario}>¡Terminar Compra!</button><br />
        </div>
    )}
        </>
    )
}

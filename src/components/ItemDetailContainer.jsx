import React from "react";
import { useState, useEffect } from "react";
import "./ItemListContainer";
import {getDoc, getFirestore, doc } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css'

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, 'productos', idItem)

        getDoc(refDoc).then((item) => {
            const aux = {
                ...item.data(), 
                id: item.id
            }
            setProducto(aux)
            });
        }, [idItem]);

    return (<div className="itemDetailContainer"><ItemDetail producto={producto} /></div>)
}
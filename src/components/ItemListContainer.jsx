import React from "react";
import { useState, useEffect } from "react";
import "./ItemListContainer";
import ItemList from "./ItemList";
import {getDocs, getFirestore, collection, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();

    useEffect(() => {
        const db = getFirestore();
        let miCollection;

        // eslint-disable-next-line eqeqeq
        if(categoria == undefined){
            miCollection = collection(db, "productos");
        } else {
            miCollection = query(
                collection(db, "productos"),
                where("categoria", "==" , categoria)
            );
        }
        getDocs(miCollection).then((data) => {
            const auxProductos = data.docs.map((productos) => ({
                ...productos.data(), 
                id: productos.id
            }));
            setProductos(auxProductos)
            });
        }, [categoria]);



    return (<ItemList productos={productos} />)
}
import React, { useContext } from 'react';
import { CarritoContexto } from '../CarritoContextoComponente';

export default function CartWidget(){
    const {totalCount} = useContext(CarritoContexto);
    return(
        <span>{totalCount}</span>
    )
}
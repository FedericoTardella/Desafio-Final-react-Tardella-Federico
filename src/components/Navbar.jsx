import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div className="logotitulo">
                <h1 className="lucero">Lucero Mates</h1>
            </div>
            <div className='DivNavbar'>
                <div>
                    <Link to="/BodyPrincipal">Home</Link>
                    <Link to="/">Productos</Link>
                </div>
                <div>
                    <Link to="/categoria/Mates">Mates</Link>
                    <Link to="/categoria/Termos">Termos</Link>
                    <Link to="/categoria/Bombillas">Bombillas</Link>
                </div>
                <div>
                    <Link to="/carrito">Carrito🛒<CartWidget /></Link>
                    <Link to="/checkout">CheckOut</Link>
                </div>
            </div>
        </nav>
    )
}

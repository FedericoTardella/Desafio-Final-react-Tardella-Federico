import './App.css';
import BodyPrincipal from './components/BodyPrincipal';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import CarritoContextoComponente from './CarritoContextoComponente';
import Checkout from './components/Checkout';
import Cart from './components/Cart';

export default function App() {
  return (
    <CarritoContextoComponente>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/BodyPrincipal" element = {<BodyPrincipal />} />
        <Route path="/" element = {<ItemListContainer />} />
        <Route path="categoria/:categoria" element={<ItemListContainer />} />
        <Route path="item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/CheckOut" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CarritoContextoComponente>

    );
}


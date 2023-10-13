import React, { useState, useEffect } from 'react';
import './App.css';
import ProductView from './components/productview';
import ProductoModal from './components/ProductoModal';
import Carrito from './components/carrito';
import Nadvar from './components/navbar';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const toggleModal = (producto) => {
    setProductoSeleccionado(producto);
    setShowModal(!showModal);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (producto) => {
    const updatedCarrito = carrito.filter((item) => item !== producto);
    setCarrito(updatedCarrito);
  };

  const calcularTotalCarrito = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
  };

  return (
    <div className="App">
      <Nadvar/>
      <h1>Productos</h1>
      <ProductView onVerDetalle={toggleModal} onAgregarCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} onEliminar={eliminarDelCarrito} onCalcularTotal={calcularTotalCarrito} />
      {showModal && <ProductoModal producto={productoSeleccionado} onClose={toggleModal} />}
    </div>

  );
}




export default App;
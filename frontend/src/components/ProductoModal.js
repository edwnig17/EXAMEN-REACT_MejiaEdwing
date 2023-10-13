import React, { useState } from 'react';
import '../styles/modal.css';

function ProductoModal({ producto, onClose, onAgregarCarrito, carritoTotal, setCarritoTotal }) {
  const [cantidad, setCantidad] = useState(1);

  const handleAgregarCarrito = () => {
    const productoConCantidad = { ...producto, cantidad };
    onAgregarCarrito(productoConCantidad);
    const productoTotal = producto.precio * cantidad;
    setCarritoTotal(carritoTotal + productoTotal);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen[0]} alt={producto.nombre} />
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <label>Cantidad:</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <button onClick={handleAgregarCarrito}>Agregar al Carrito</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ProductoModal;

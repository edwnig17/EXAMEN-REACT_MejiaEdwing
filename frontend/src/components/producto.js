import React from 'react';

function Producto({ producto, onVerDetalle, onAgregarCarrito }) {
  return (
    <div className="producto">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen[0]} alt={producto.nombre} />
      <p>Precio: ${producto.precio}</p>
      <button onClick={onVerDetalle}>Ver Detalle</button>
      <button onClick={onAgregarCarrito}>Agregar al Carrito</button>
    </div>
  );
}

export default Producto;

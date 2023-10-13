import React from 'react';
import '../styles/carrito.css';

function Carrito({ carrito, onEliminar }) {
  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    return total;
  };

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto._id}>
            <div className="producto-info">
              <img src={producto.imagen[0]} alt={producto.nombre} />
              <div className="producto-details">
                <p>{producto.nombre}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio: ${producto.precio}</p>
              </div>
            </div>
            <button onClick={() => onEliminar(producto)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="carrito-total">
        <p>Total: ${calcularTotal()}</p>
        <button>Pagar</button>
      </div>
    </div>
  );
}

export default Carrito;

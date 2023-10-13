import React, { useState } from 'react';
import '../styles/nadvar.css';
import Carrito from './carrito';

function Navbar({ onCarritoToggle, carritoTotal }) {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const handleCarritoToggle = () => {
    setCarritoVisible(!carritoVisible);
    onCarritoToggle();
  };

  return (
    <div className="navbar">
      <ul>
        <li>Producto 1</li>
        <li>Producto 2</li>
        <li>Producto 3</li>
        <li>Producto 4</li>
        <li>Producto 5</li>
        <li>
          <span className="carrito-icon" onClick={handleCarritoToggle}>
            <i className="fa fa-shopping-cart"></i>
            <span className="carrito-total">{carritoTotal}</span>
          </span>
          {carritoVisible && <Carrito />}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

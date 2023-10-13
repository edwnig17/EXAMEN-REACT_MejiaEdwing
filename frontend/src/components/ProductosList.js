import React, { useState, useEffect } from 'react';
import Producto from './producto';
import axios from 'axios';

function ProductosList({ onVerDetalle, onAgregarCarrito }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5010/producto')
      .then((response) => {
        setProductos(response.data.data);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  return (
    <div className="productos">
      {productos.map((producto) => (
        <Producto
          key={producto._id}
          producto={producto}
          onVerDetalle={() => onVerDetalle(producto)}
          onAgregarCarrito={() => onAgregarCarrito(producto)}
        />
      ))}
    </div>
  );
}


export default ProductosList;

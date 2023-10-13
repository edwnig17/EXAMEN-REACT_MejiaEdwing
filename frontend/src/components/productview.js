import React, { useEffect, useState } from 'react';
import '../styles/producto.css';

function ProductView({ onAgregarCarrito }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1); 
  const [carritoTotal, setCarritoTotal] = useState(0); 

  useEffect(() => {
    fetch('http://localhost:5010/producto', {
      headers: {
        'Accept-version': '1.0.0',
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCantidadChange = (event) => {
    setCantidad(Number(event.target.value)); //Actualiza el valor que le vayas a mandar (es decir la cantidad de productos)
  };

  const agregarAlCarrito = (product) => {
    const productoConCantidad = { ...product, cantidad };
    onAgregarCarrito(productoConCantidad); 
    setCarritoTotal((total) => total + product.precio * cantidad);
    setCantidad(1);
  };

  return (
    <div className="product-container">
      <div className="left-container">
        {products.slice(0, 4).map((product) => (
          <div key={product._id} className="shoe">
            <img
              src={product.imagen[0]}
              alt={product.nombre}
              onClick={() => showProductDetails(product)}
            />
            {product.nombre}
            {product.descripcion}
            {product.precio}
          </div>
        ))}
      </div>
      <div className="right-container">
        {selectedProduct && (
          <>
            <h1>{selectedProduct.nombre}</h1>
            <img
              src={selectedProduct.imagen[0]}
              alt={selectedProduct.nombre}
            />
            <p>{selectedProduct.descripcion}</p>
            <p>Precio: ${selectedProduct.precio}</p>
            <label>Cantidad:</label>
            <input
              type="number"
              value={cantidad}
              onChange={handleCantidadChange}
            />
            <button onClick={() => agregarAlCarrito(selectedProduct)}>
              Agregar al Carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductView;

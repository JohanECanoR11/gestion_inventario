import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductosList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/productos');
        setProductos(response.data);
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto._id}>
            <Link to={`/productos/${producto._id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductosList;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductoDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/productos/${id}`);
        setProducto(response.data);
      } catch (error) {
        console.error('Error fetching producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Descripción: {producto.descripcion}</p>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: {producto.precio}</p>
      <p>Stock: {producto.cantidadEnStock}</p>
    </div>
  );
}

export default ProductoDetail;

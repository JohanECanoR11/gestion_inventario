import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function ProductoForm() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState(0);
  const [cantidadEnStock, setCantidadEnStock] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProducto = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/productos/${id}`);
          const { nombre, descripcion, categoria, precio, cantidadEnStock } = response.data;
          setNombre(nombre);
          setDescripcion(descripcion);
          setCategoria(categoria);
          setPrecio(precio);
          setCantidadEnStock(cantidadEnStock);
        } catch (error) {
          console.error('Error fetching producto:', error);
        }
      };

      fetchProducto();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productoData = { nombre, descripcion, categoria, precio, cantidadEnStock };
      if (id) {
        await axios.put(`http://localhost:5000/api/productos/${id}`, productoData);
      } else {
        await axios.post('http://localhost:5000/api/productos', productoData);
      }
      navigate('/productos');
    } catch (error) {
      console.error('Error saving producto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
      </div>
      <div>
        <label>Categoría:</label>
        <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
      </div>
      <div>
        <label>Precio:</label>
        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
      </div>
      <div>
        <label>Stock:</label>
        <input type="number" value={cantidadEnStock} onChange={(e) => setCantidadEnStock(e.target.value)} required />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default ProductoForm;

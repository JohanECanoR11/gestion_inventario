import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import CategoriasPage from './pages/CategoriasPage';
import ProductoDetail from './components/ProductoDetail';
import ProductoForm from './components/ProductoForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductosPage />} />
      <Route path="/productos/:id" element={<ProductoDetail />} />
      <Route path="/productos/crear" element={<ProductoForm />} />
      <Route path="/productos/editar/:id" element={<ProductoForm />} />
      <Route path="/categorias" element={<CategoriasPage />} />
    </Routes>
  );
}

export default App;

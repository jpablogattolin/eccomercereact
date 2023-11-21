
import React from 'react';
import { useParams } from 'react-router-dom';


const DetallesProducto = () => {
  
  const { id } = useParams();

  
  const obtenerDetallesProducto = (productoId) => {
    
    const productos = [
      { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1' },
      { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2' },
      { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3' },
    ];

    
    return productos.find(producto => producto.id === parseInt(productoId));
  };

  
  const producto = obtenerDetallesProducto(id);

  
  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  
  return (
    <div>
      <h2>Detalles del Producto</h2>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
    </div>
  );
};

export default DetallesProducto;

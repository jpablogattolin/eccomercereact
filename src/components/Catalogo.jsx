import React from "react";

const Catalogo = () => {
  const productos = [
    { id: 1, nombre: "Producto 1", precio: 20 },
    { id: 2, nombre: "Producto 2", precio: 30 },
    { id: 3, nombre: "Producto 3", precio: 25 },
  ];

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <a href={`/detalles/${producto.id}`}>
              {producto.nombre} - ${producto.precio}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogo;

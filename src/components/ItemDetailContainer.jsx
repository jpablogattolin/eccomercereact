// Importa las dependencias necesarias
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  const obtenerDetallesProducto = (productoId) => {
    const productos = [
      {
        id: 1,
        nombre: "Producto 1",
        descripcion: "Descripción del Producto 1",
      },
      {
        id: 2,
        nombre: "Producto 2",
        descripcion: "Descripción del Producto 2",
      },
      {
        id: 3,
        nombre: "Producto 3",
        descripcion: "Descripción del Producto 3",
      },
    ];

    return productos.find((producto) => producto.id === parseInt(productoId));
  };

  useEffect(() => {
    const detalles = obtenerDetallesProducto(id);

    setProducto(detalles);
  }, [id]);

  return (
    <div>
      <h2>Detalles del Producto</h2>
      {producto ? (
        <>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
        </>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

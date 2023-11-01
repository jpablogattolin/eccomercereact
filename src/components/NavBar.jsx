import React from 'react';
import Cartwidget from './CartWidget';

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>MAYORISTA DE LIMPIEZA</h1>
      <h2>INICIO</h2>
      <h2>PRODUCTOS</h2>
      <h2>ACERCA DE NOSOTROS</h2>
      <h2>CONTACTO</h2>
      <Cartwidget />
    </div>
  );
}

export default NavBar;

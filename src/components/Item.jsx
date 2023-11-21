import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre }) => {
  return (
    <div>
      <Link to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  );
};

export default Item;

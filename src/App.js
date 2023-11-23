import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListCointainer";
import DetallesProducto from "./components/DetallesProducto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {
  BrowserRouter as Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
//import './styles.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={ItemListContainer} />

          <Route path="/category/:id" element={ItemListContainer} />

          <Route path="/item/:id" element={ItemDetailContainer} />
        </Routes>
      </BrowserRouter>

      <div className="app">
        
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      </div>
    </>
  );
};

export default App;

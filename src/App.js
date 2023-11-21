import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListCointainer';
import DetallesProducto from './components/DetallesProducto';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
//import './styles.css';


const App = () => {
  return (

    <><Routes>
    <div>
      
      <Navbar />     
     
        <Route path="/" exact component={ItemListContainer} />

        
        <Route path="/category/:id" component={ItemListContainer} />

        
        <Route path="/item/:id" component={ItemDetailContainer} />

        
        <Route component={ItemListContainer} />
      
    </div>
  </Routes>

    
    <div className="app">
        <NavBar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      </div></>
  );
}

export default App;

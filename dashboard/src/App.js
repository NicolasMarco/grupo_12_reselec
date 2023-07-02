import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SeparadorSeccion from './components/SeparadorSeccion/SeparadorSeccion';
import ProductosTotales from './components/ProductosTotales/ProductosTotales';
import UsuariosTotales from './components/UsuariosTotales/UsuariosTotales';
import TotalCategorias from './components/TotalCategorias/TotalCategorias';
import UltimoProducto from './components/UltimoProducto/UltimoProducto';
import ProductosCategoria from './components/ProductosCategoria/ProductosCategoria';
import ListadoProductos from './components/ListadoProductos/ListadoProductos';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <SeparadorSeccion />
        <div className = "ContenedorTotal-App">
          <div className = "ContenedorA-App">
            <ProductosTotales />
            <UsuariosTotales />
            <TotalCategorias />
            <UltimoProducto />
            <ProductosCategoria />
          </div>
          <div className = "ContenedorB-App">
            
            <ListadoProductos />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

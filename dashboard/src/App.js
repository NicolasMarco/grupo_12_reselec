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

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <SeparadorSeccion />
        <div className = "ContenedorTotales-App">
          <ProductosTotales />
          <UsuariosTotales />
          <TotalCategorias />
        </div>
          <UltimoProducto />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

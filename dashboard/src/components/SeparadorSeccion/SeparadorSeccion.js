import React, { Component } from "react";
import './SeparadorSeccion.css';

class SeparadorSeccion extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      
      return (
        <div class = "EncabezadoProductos-SeparadorSeccion">
            <div class = "LineaEstetica-SeparadorSeccion"></div>
            <div class = "ContenedorTitulo-SeparadorSeccion">
                <h3 class = "TituloDestacadosA-SeparadorSeccion">Informacion </h3>
                <h3 class = "TituloDestacadosB-SeparadorSeccion">Productos</h3>
            </div>
        </div>
      );
    }
  }

export default SeparadorSeccion;
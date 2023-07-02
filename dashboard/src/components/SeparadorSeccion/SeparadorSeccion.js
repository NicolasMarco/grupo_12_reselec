import React, { Component } from "react";
import './SeparadorSeccion.css';

class SeparadorSeccion extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      
      return (
        <div className = "ContenedorTotal-SeparadorSeccion">
          <div className = "EncabezadoProductos-SeparadorSeccion">
            <div className = "LineaEstetica-SeparadorSeccion"></div>
            <div className = "ContenedorTitulo-SeparadorSeccion">
                <h3 className = "TituloDestacadosA-SeparadorSeccion">Informacion</h3>
                <h3 className = "TituloDestacadosB-SeparadorSeccion">Productos</h3>
            </div>
          </div>
        </div>
      );
    }
  }

export default SeparadorSeccion;
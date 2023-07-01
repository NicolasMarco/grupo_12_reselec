import React, { Component } from "react";
import './ProductosCategoria.css';

class ProductosCategoria extends Component {
    constructor(props) {
      super(props);
      this.state = {
        resistencias: "",
        medicion: "",
        conexion: ""
      };
    }

    componentDidMount() {
      fetch("http://localhost:3000/api/products")
        .then(response => (response.json()))
        .then(data => {
            this.setState({
                resistencias: data.countByCategory.resistencias,
                medicion: data.countByCategory.medicion,
                conexion: data.countByCategory.conexion
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
      return (
        <div className = "ContenedorTotal-PCategorias">
            <div className = "ContenedorElementos-PCategorias">
                <div className = "ContenedorTitulo-PCategorias">
                    <h3 className  = "TituloSeccionA-PCategorias">Productos por</h3>
                    <h3 className = "TituloSeccionB-PCategorias">categoria</h3>
                </div>
                <div className = "LineaEstetica-PCategorias"></div>
                <div className = "ContenedorInfo-PCategorias">
                    <div className = "ContenedorCategoria-PCategorias">
                        <h3 className = "TituloSeccion-PCategorias">Resistencias:</h3>
                        <h3 className = "NumeroProductos-PCategorias">{this.state.resistencias}</h3>
                    </div>
                    <div className = "ContenedorCategoria-PCategorias">
                        <h3 className = "TituloSeccion-PCategorias">Medicion:</h3>
                        <h3 className = "NumeroProductos-PCategorias">{this.state.medicion}</h3>
                    </div>
                    <div className = "ContenedorCategoria-PCategorias">
                        <h3 className = "TituloSeccion-PCategorias">Conexion:</h3>
                        <h3 className = "NumeroProductos-PCategorias">{this.state.conexion}</h3>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

export default ProductosCategoria;
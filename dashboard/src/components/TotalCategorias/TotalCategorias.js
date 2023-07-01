import React, { Component } from "react";
import './TotalCategorias.css';

class TotalCategorias extends Component {
    constructor(props) {
      super(props);
      this.state = {
        totalCategorias: ""
      };
    }

    componentDidMount() {
      fetch("http://localhost:3000/api/products")
        .then(response => (response.json()))
        .then(data => {
            this.setState({
              totalCategorias: data.categories
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
      return (
        <div className = "ContenedorTotal-TCategorias">
          <div className = "ContenedorInfo-TCategorias">
            <h3 className = "TituloSeccion-TCategorias">Categorias totales:</h3>
            <h3 className = "NumeroProductos-TCategorias">{this.state.totalCategorias}</h3>
          </div>
        </div>
      );
    }
  }

export default TotalCategorias;
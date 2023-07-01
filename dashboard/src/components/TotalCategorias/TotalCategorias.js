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
        <div class = "ContenedorTotal-TCategorias">
          <div class = "ContenedorInfo-TCategorias">
            <h3 class = "TituloSeccion-TCategorias">Categorias totales:</h3>
            <h3 class = "NumeroProductos-TCategorias">{this.state.totalCategorias}</h3>
          </div>
        </div>
      );
    }
  }

export default TotalCategorias;
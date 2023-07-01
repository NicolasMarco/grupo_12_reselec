import React, { Component } from "react";
import './ProductosTotales.css';

class ProductosTotales extends Component {
    constructor(props) {
      super(props);
      this.state = {
        totalProductos: ""
      };
    }
    
    componentDidMount() {
      fetch("http://localhost:3000/api/products")
        .then(response => (response.json()))
        .then(data => {
            this.setState({
              totalProductos: data.count
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
      return (
        <div class = "ContenedorTotal-PTotales">
          <div class = "ContenedorInfo-PTotales">
            <h3 class = "TituloSeccion-PTotales">Productos totales:</h3>
            <h3 class = "NumeroProductos-PTotales">{this.state.totalProductos}</h3>
          </div>
        </div>
      );
    }
  }

export default ProductosTotales;
import React, { Component } from "react";

class ProductosTotales extends Component {
    constructor(props) {
      super(props);
      this.state = {
        totalProductos: ""
      };
    }
    
    buscarProductos() {
      fetch("http://localhost:3000/api/products")
      .then(response => (response.json()))
      .then(data => {
          this.setState({
            totalProductos: data.count
          })
          console.log(data);
      })
      .catch(error => {
          console.log(error)
      })
    }

    render() {
      //this.buscarProductos();
      return (
        <h3>Cantidad de productos: {this.state.totalProductos}</h3>
      );
    }
  }

export default ProductosTotales;
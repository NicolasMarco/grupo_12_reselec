/*import React, { Component } from "react";
import './UltimoProducto.css';
//import ImagenProducto from '../../assets/images/products/'

const productImage = require.context("../../assets/images/products")

class UltimoProducto extends Component(){
    constructor(props) {
        super(props);
        this.state = {
          products: [{}]
        };
      }

      componentDidMount (){
        fetch("http://localhost:3000/api/products")
        .then(response => (response.json())) 
        .then(data => {
            this.setState ({
                products : data.products
            });
            console.log(this.state.products);
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render () {
        
        return (
            <div className = "ContenedorTotal-UltimoProducto">
                <div className = "ContenedorInfo-UltimoProducto">
                <div className = "ContenedorTitulo-UltimoProducto">
                    <h3 className = "TituloSeccionA-UltimoProducto">Ultimo producto</h3>
                    <h3 className = "TituloSeccionB-UltimoProducto">agregado</h3>
                </div>
                <div className = "LineaEstetica-UltimoProducto"></div>
                <a href = "#" className = "InfoProducto-UltimoProducto">
                    <h3 className = "NombreProducto-UltimoProducto">Pirometro</h3>
                    <img className = "ImagenProducto-UltimoProducto" src = {productImage(`./Termocuplas.jpg`)}></img>
                    <p className = "Descripcion-UltimoProducto">Descripcion</p>
                </a>
                </div>
            </div>
        );
    }
  }

export default UltimoProducto;*/

import React, { Component } from "react";
import './UltimoProducto.css';
//import ImagenProducto from '../../assets/images/products/'

const productImage = require.context("../../assets/images/products")

class UltimoProducto extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lastProduct: ""
      };
    }
    
    componentDidMount() {
      fetch("http://localhost:3000/api/products")
        .then(response => (response.json()))
        .then(data => {
            this.setState({
                lastProduct: data.products[data.count - 1]
            })

        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
      let imagenProducto;
      let nombreProducto;
      let descripcionProducto;
      let direccionProducto

      if(this.state.lastProduct === "") {
          imagenProducto = "default.jpg"
          nombreProducto = "Buscando..."
          descripcionProducto = "Buscando..."
          direccionProducto = "#"
      } else {
          nombreProducto = this.state.lastProduct.name;
          descripcionProducto = this.state.lastProduct.description;
          imagenProducto = this.state.lastProduct.image;
          direccionProducto = this.state.lastProduct.detail;
      }
      
        return (
          <div className = "ContenedorTotal-UltimoProducto">
              <div className = "ContenedorInfo-UltimoProducto">
              <div className = "ContenedorTitulo-UltimoProducto">
                  <h3 className = "TituloSeccionA-UltimoProducto">Ultimo producto</h3>
                  <h3 className = "TituloSeccionB-UltimoProducto">agregado</h3>
              </div>
              <div className = "LineaEstetica-UltimoProducto"></div>
              <a href = {direccionProducto} className = "InfoProducto-UltimoProducto">
                  <h3 className = "NombreProducto-UltimoProducto">{nombreProducto}</h3>
                  <img className = "ImagenProducto-UltimoProducto" src = {productImage(`./${imagenProducto}`)}></img>
                  <p className = "Descripcion-UltimoProducto">{descripcionProducto}</p>
              </a>
              </div>
          </div>
        );
    }
  }

export default UltimoProducto;
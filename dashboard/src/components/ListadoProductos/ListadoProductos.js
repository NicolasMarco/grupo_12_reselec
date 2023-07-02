import React, { Component } from "react";
import './ListadoProductos.css';
import Producto from '../Producto/Producto';

class ListadoProductos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        productos: []
      };
    }

    componentDidMount() {
      fetch("http://localhost:3000/api/products")
        .then(response => (response.json()))
        .then(data => {
            this.setState({
                productos: data.products
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {  
        return (
            <div className = "ContenedorTotal-LProductos">
                <div className = "ContenedorElementos-LProductos">
                    <div className = "ContenedorTitulo-LProductos">
                        <h3 className  = "TituloSeccionA-LProductos">Productos</h3>
                        <h3 className = "TituloSeccionB-LProductos">cargados</h3>
                    </div>
                    <div className = "LineaEstetica-LProductos"></div>
                    <div className = "ContenedorInfo-LProductos">
                        <div className = "ContenedorEncabezados-Productos">
                            <div className = "EncabezadoID-Producto">
                                <h3 className = "InfoEncabezado-Producto">ID</h3>
                            </div>
                            <div className = "EncabezadoNombre-Producto">
                                <h3 className = "InfoEncabezado-Producto">Nombre</h3>
                            </div>
                            <div className = "EncabezadoDescripcion-Producto">
                                <h3 className = "InfoEncabezado-Producto">Descripcion</h3>
                            </div>
                            <div className = "EncabezadoPrecio-Producto">
                                <h3 className = "InfoEncabezado-Producto">Precio</h3>
                            </div>
                        </div>
                        {this.state.productos.map((producto , index) => {
                            return <Producto {...producto} key={index}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
  }

export default ListadoProductos;
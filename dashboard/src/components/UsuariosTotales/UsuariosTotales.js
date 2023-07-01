import React, { Component } from "react";
import './UsuariosTotales.css';

class UsuariosTotales extends Component {
    constructor(props) {
      super(props);
      this.state = {
        totalUsuarios: ""
      };
    }
    
    componentDidMount() {
      fetch("http://localhost:3000/api/users")
        .then(response => (response.json()))
        .then(data => {
            this.setState({
              totalUsuarios: data.count
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
      return (
        <div class = "ContenedorTotal-UTotales">
          <div class = "ContenedorInfo-UTotales">
            <h3 class = "TituloSeccion-UTotales">Usuarios totales:</h3>
            <h3 class = "NumeroProductos-UTotales">{this.state.totalUsuarios}</h3>
          </div>
        </div>
      );
    }
  }

export default UsuariosTotales;
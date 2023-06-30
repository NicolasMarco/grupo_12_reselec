import React, { Component } from "react";
import './Header.css';
import LogoReselec from '../../assets/images/home/Logo Reselec Sombra Blanca.png'

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        imgUno: "bornerasCeramicas.jpg"
      };
    }

    render() {
      //this.buscarProductos();
      return (
        <div class = "login-Header-Contenedor">
            <div class = "login-ContenidoHeader">
                <a class = "login-LogoHeader" href="/">
                    <img class = "login-ImagenLogoHeader" src={LogoReselec}></img>
                </a>
            </div>
        </div>
      );
    }
  }

export default Header;
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
      
      return (
        <div className = "login-Header-Contenedor">
            <div className = "login-ContenidoHeader">
                <a className = "login-LogoHeader" href="/">
                    <img className = "login-ImagenLogoHeader" src={LogoReselec}></img>
                </a>
            </div>
        </div>
      );
    }
  }

export default Header;
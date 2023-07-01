import React, { Component } from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp , faFacebook , faInstagram , faYoutube} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      
      return (
        <div className = "contenidoFooter">
            <div className = "datosContacto">
                <h4 className = "tituloFooter">CONTACTANOS</h4>
            
                <div className = "lineaTextoFooter">
                    <i className = "logoFooter"><FontAwesomeIcon icon={faWhatsapp} /></i>
                    <p className = "textoLineaFooter">54 9 11 5661-0726</p>
                </div>

                <div className = "lineaTextoFooter">
                    <i className="logoFooter"><FontAwesomeIcon icon={faHouse} /></i>
                    <p className = "textoLineaFooter">Ituzaingó - Buenos Aires</p>
                </div>
                
                <div className = "lineaTextoFooter">
                    <i className="logoFooter"><FontAwesomeIcon icon={faEnvelope} /></i>
                    <p className = "textoLineaFooter">contacto@reselec.com.ar</p>
                </div>
            </div>

            <div className = "logosRedesSociales">
                <a href="#" className = "enlaceRedSocial"><i class="logoRedSocial"><FontAwesomeIcon icon={faFacebook} /></i></a>
                <a href="#" className = "enlaceRedSocial"><i class="logoRedSocial"><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a href="#" className = "enlaceRedSocial"><i class="logoRedSocial"><FontAwesomeIcon icon={faYoutube} /></i></a>
            </div>

            <p className = "textoDerechosFooter"> Copyright © 2006-2023 Reselec S.A.S </p>
        </div>
      );
    }
  }

export default Footer;
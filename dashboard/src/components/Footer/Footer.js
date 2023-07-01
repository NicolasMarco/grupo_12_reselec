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
        <div class = "contenidoFooter">
            <div class = "datosContacto">
                <h4 class = "tituloFooter">CONTACTANOS</h4>
            
                <div class = "lineaTextoFooter">
                    <i class = "logoFooter"><FontAwesomeIcon icon={faWhatsapp} /></i>
                    <p class = "textoLineaFooter">54 9 11 5661-0726</p>
                </div>

                <div class = "lineaTextoFooter">
                    <i class="logoFooter"><FontAwesomeIcon icon={faHouse} /></i>
                    <p class = "textoLineaFooter">Ituzaingó - Buenos Aires</p>
                </div>
                
                <div class = "lineaTextoFooter">
                    <i class="logoFooter"><FontAwesomeIcon icon={faEnvelope} /></i>
                    <p class = "textoLineaFooter">contacto@reselec.com.ar</p>
                </div>
            </div>

            <div class = "logosRedesSociales">
                <a href="#" class = "enlaceRedSocial"><i class="logoRedSocial"><FontAwesomeIcon icon={faFacebook} /></i></a>
                <a href="#" class = "enlaceRedSocial"><i class="logoRedSocial"><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a href="#" class = "enlaceRedSocial"><i class="logoRedSocial"><FontAwesomeIcon icon={faYoutube} /></i></a>
            </div>

            <p class = "textoDerechosFooter"> Copyright © 2006-2023 Reselec S.A.S </p>
        </div>
      );
    }
  }

export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


import './index.css';

const Footer = () => (
    <footer>
        <div>
            <small><b>NOSSAS REDES SOCIAIS </b></small>
            <ul className="icons">
                <li><a href="#"><FontAwesomeIcon size="2x"  icon={faFacebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon size="2x"  icon={faInstagram} style={{color:'rgb(228,64,95)'}} /></a></li>
            </ul>
        </div>
        <div>
                <small><b>ENTRE EM CONTATO </b></small>
            <ul className="icons">
                <li><a href="#"><FontAwesomeIcon size="2x" icon={faWhatsapp} style={{color:'green'}} /></a></li>
                <li><a href="#"><FontAwesomeIcon size="2x" icon={faPhone} style={{color:'black'}} /></a></li>
                <li><a href="#"><FontAwesomeIcon size="2x"  icon={faEnvelopeSquare} style={{color:'#c71610'}}/></a></li>
            </ul>
        </div>
        <div>
                <small><b>NOSSOS PARCEIROS </b></small>
            <ul className="icons">
                <li> <a href="https://softstate.com.br" target="_blank"> <img src="https://i.imgur.com/N8QL5Ey.png" width="48" alt="SS"/></a></li>
                <li> <a href="#" > <FontAwesomeIcon size="2x" icon={faPlus} style={{color:'gray'}}/></a></li>
                <li><a href="https://letsencrypt.org" target="_blank"><img src="https://letsencrypt.org/images/le-logo-twitter-noalpha.png" alt="LetsEncript" width="48"/></a></li>
            </ul>
        </div>
        <small>
            <ul>
                <li><b>MS Brinquedos, Decoracoes, Reformas e Locacoes</b></li>
                <li>Av. Mateus de Albuquerque, 490 - Capão Redondo</li>
                <li>São Paulo - SP, 05859-230</li>
                <li>CNPJ: </li>
                <li>&copy; <b>MS Brinquedos, Todos os Direitos Reservados</b></li> 
                <li>Made by:  <a href="https://softstate.com.br" target="_blank">SOFTSTATE SOLUTIONS <img src="https://i.imgur.com/ptAZBgb.png" alt="SS"/></a></li>
                <li> . </li> 
                <li> . </li>
            </ul>
        </small>
    </footer>
);

export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import './index.css';


const Footer = () => {

    return (
    <footer >
         <div>
                <small><b>COMPARTILHE!</b></small>
            <ul className="icons">
                <li><a href="http://wa.me/?text=Salve o MS Brinquedos no seu celular!" data-action="share/whatsapp/share"><FontAwesomeIcon size="2x" icon={faWhatsapp} style={{color:'#075e54'}} /></a></li>
                <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=https://msbrinquedos.com.br&title=&summary=&source="><FontAwesomeIcon size="2x" icon={faLinkedinIn} style={{color:'#0e76a8'}} /></a></li>
                <li><a href="https://twitter.com/home?status=https://msbrinquedos.com.br "><FontAwesomeIcon size="2x"  icon={faTwitter} style={{color:'#00acee'}} /></a></li>
                <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://msbrinquedos.com.br"><FontAwesomeIcon size="2x" icon={faFacebookF} style={{color:'#3b5998'}} /></a></li>
            </ul>
        </div>
        <div>
            <small><b>NOSSAS REDES SOCIAIS </b></small>
            <ul className="icons">
                <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=https://msbrinquedos.com.br&title=&summary=&source="><FontAwesomeIcon size="2x" icon={faLinkedin} style={{color:'#0e76a8'}} /></a></li>
                <li><a href="https://pt-br.facebook.com/msbrinquedos/"><FontAwesomeIcon size="2x"  icon={faFacebook} style={{color:'#3b5998'}}/></a></li>
                <li><a href="#"><FontAwesomeIcon size="2x"  icon={faInstagram} style={{color:'rgb(228,64,95)'}} /></a></li>
            </ul>
        </div>
        <div>
                <small><b>ENTRE EM CONTATO </b></small>
            <ul className="icons">
                <li><a href="https://wa.me/5511940182385?text=Oi,%20MS Brinquedos!%20Quero%20solicitar%20um%20orçamento!"><FontAwesomeIcon size="2x" icon={faWhatsappSquare} style={{color:'#075e54'}} /></a></li>
                <li><a href="tel:+5511940182385"><FontAwesomeIcon size="2x" icon={faPhoneSquare} style={{color:'black'}} /></a></li>
                <li><a href="mailto:salvadorbrinquedos@hotmail.com?subject=Solicitação%20de%20Orçamento&body=Gostaria%20de%20alugar%20os%20brinquedos%20https://www.msbrinquedos.com.br"><FontAwesomeIcon size="2x"  icon={faEnvelopeSquare} style={{color:'#c71610'}}/></a></li>
            </ul>
        </div>
        <small>
            <ul>
                <li><b>MS Brinquedos, Decorações, Reformas e Locações</b></li>
                <li>Al. Jose Lopes de Almeida, 257 - Capão Redondo</li>
                <li>São Paulo - SP, 05859-270</li>
                <li>CNPJ: 10.682.583/0001-31</li>
                <li>&copy; <b>MS Brinquedos, Todos os Direitos Reservados</b></li> 
                <li><small>Created by:  <a href="https://softstate.com.br" target="_blank">SOFTSTATE SOLUTIONS <img src="https://firebasestorage.googleapis.com/v0/b/soft-state.appspot.com/o/favicon-16x16.png?alt=media&token=777a1aa6-fe4d-4942-b540-86bc2af5f1ed" width="12" alt="SS"/></a></small></li>
            </ul>
        </small>
    </footer>
    );
};

export default Footer;
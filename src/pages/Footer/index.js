import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";


import './index.css';

const Footer = () => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faPhone} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faMailBulk} /></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; MS Brinquedos. Todos os direitos reservados</li><li>Design:  <a href="https://softstate.com.br" target="_blank">SOFTSTATE SOLUTIONS</a></li>
            </ul>
        </div>
    </footer>
);

export default Footer;
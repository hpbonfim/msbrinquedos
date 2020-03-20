import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-materialize';



const FloatButton = () => {

    // CSS SOCIAL ICONS
    const logoWhiteStyle = {
        textAlign: "center",
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        marginBottom: 60,
        fontWeight: "bold"
      };
  
    // CSS SOCIAL ICONS
    const logoWppStyle = {
        textAlign: "center",
        color: (opacity = 1) => `rgba(37,211,102, ${opacity})`,
        marginBottom: 60,
        fontWeight: "bold"
      };

      function facebook() {
        window.open("https://pt-br.facebook.com/msbrinquedos/", "_blank")
      }

      function whatsapp() {
        window.open("https://wa.me/5511940182385?text=Oi,%20 MS Brinquedos!%20Quero%20solicitar%20um%20orçamento!", "_blank")
      }

      function telefone() {
        window.open("tel:+5511940182385", "_blank")
      }

      function email() {
        window.open("mailto:salvadorbrinquedos@hotmail.com?subject=Solicitaçao%20de%20Orçamento&body=Gostaria%20de%20alugar%20os%20brinquedos%20que%20escolhi%20no%20site%20https://www.msbrinquedos.com.br",  "_blank")
      }
   
    return (
        <div>
            <Button
                className="black"
                fab={{
                    direction: 'top',
                    hoverEnabled: false
                }}
                floating
                large
                icon={<FontAwesomeIcon icon={faLink} />}
                node="button"
            >
                <Button
                    className="green"
                    floating
                    icon={<FontAwesomeIcon icon={faWhatsapp} />}
                    node="button"
                    onClick={whatsapp}
                />
                  <Button
                    className="blue"
                    floating
                    icon={<FontAwesomeIcon icon={faFacebook} />}
                    node="button"
                    onClick={facebook}
                />
                <Button
                    className="darkgray"
                    floating
                    icon={<FontAwesomeIcon icon={faPhoneSquareAlt} />}
                    node="button"
                    onClick={telefone}
                />
                <Button
                    className="red"
                    floating
                    icon={<FontAwesomeIcon icon={faEnvelopeSquare} />}
                    node="button"
                    onClick={email}
                />
            </Button>
        </div>
    );
};

export default FloatButton;
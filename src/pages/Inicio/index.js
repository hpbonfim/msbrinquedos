import React, {useEffect, useState} from 'react';
import M from 'materialize-css';
import { Parallax, Slide, Slider, Caption } from 'react-materialize';
import Footer from '../Footer';

const Inicio = ({ styles }) => {
  
    const contentStyle = {
      paddingRight: 0,
      paddingLeft: 0,
    };
    
    const contentAlignStyle = {
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      };

    return (
      <div style={contentStyle}>

        <Parallax
            image={<img alt="" src="https://i.imgur.com/RoHr7vc.png"/>}
            options={{
            responsiveThreshold: 0
            }}
        >     
            <div style={contentAlignStyle}>
                <img alt="" src="https://i.imgur.com/aeZYg17.png"/>
            </div>
            <div style={contentAlignStyle} >
                <h2 className="header">
                    BRINQUEDOS
                </h2>
            </div>
            
        </Parallax>

        <div className="section white">
            <div className="row container">
            </div>
        </div>

        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    Quem Somos
                </h2>
            </div>
            <div className="row container">
                <p className="grey-text text-darken-3 lighten-3">
                    ...
                    ...
                    ...
                </p>
            </div>
        </div>


        <Parallax
            image={<img alt="" src="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"/>}
            options={{
            responsiveThreshold: 0
            }}
        />

        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    Locacoes de Brinquedos
                </h2>
            </div>
            <div className="row container">
                <p className="grey-text text-darken-3 lighten-3">
                    ...
                    ...
                    ...
                </p>
            </div>
        </div>


        <Parallax
            image={<img alt="" src="https://lh5.googleusercontent.com/p/AF1QipN4siaiLl9sAwpYzJ54ezyfELJ1MI-sRukuXUHS=w540-h889-p-k-no"/>}
            options={{
            responsiveThreshold: 0
            }}
        />

        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    Locacao de Espaco para Festas
                </h2>
            </div>
            <div className="row container">
                <p className="grey-text text-darken-3 lighten-3">
                    ...
                    ...
                    ...
                </p>
            </div>
        </div>

        <Parallax
            image={<img alt="" src="https://lh5.googleusercontent.com/p/AF1QipNY2ZCvJkpidsVoIbAlmSxpS8k3XxLVI4qNsDIW=w540-h585-p-k-no"/>}
            options={{
            responsiveThreshold: 0
            }}
        />

        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    Decoracao de Espaco para Festas
                </h2>
            </div>
            <div className="row container">
                <p className="grey-text text-darken-3 lighten-3">
                    ...
                    ...
                    ...
                </p>
            </div>
        </div>

        <Parallax
            image={<img alt="" src="https://lh5.googleusercontent.com/p/AF1QipPmecp2rNCzEgLKRYygIRHiSuRkC7lOO5j0oLJu=w540-h889-p-k-no"/>}
            options={{
            responsiveThreshold: 0
            }}
        />

        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    Reformas de Brinquedos
                </h2>
            </div>
            <div className="row container">
                <p className="grey-text text-darken-3 lighten-3">
                    ...
                    ...
                    ...
                </p>
            </div>
        </div>

        <Parallax
            image={<img alt="" src="https://lh5.googleusercontent.com/p/AF1QipN3AOH01OZG2s2AYjda32XwVOs_6PlxTROtZryV=w540-h436-p-k-no"/>}
            options={{
            responsiveThreshold: 0
            }}
        />

        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    Seja nosso Parceiro
                </h2>
            </div>
            <div className="row container">
                <p className="grey-text text-darken-3 lighten-3">
                    ...
                    ...
                    ...
                </p>
            </div>
        </div>

        <Parallax
            image={<img alt="" src="https://i.imgur.com/gUWFKlj.png"/>}
            options={{
            responsiveThreshold: 0
            }}
        />

      </div>
    );
  };
  
export default Inicio;
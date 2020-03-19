import React, {useEffect, useState} from 'react';
import M from 'materialize-css';
import { Parallax, Slide, Slider, Caption } from 'react-materialize';
import Footer from '../Footer';

const Inicio = ({ styles }) => {
  
    const contentStyle = {
      paddingRight: 0,
      paddingLeft: 0
    };
    
    return (
      <div style={contentStyle}>
        <Parallax
            image={<img alt="" src="https://i.imgur.com/RoHr7vc.png"/>}
            options={{
            responsiveThreshold: 0
            }}
        />

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
            image={<img alt="" src="https://i.imgur.com/gUWFKlj.png"/>}
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
            image={<img alt="" src="https://i.imgur.com/gUWFKlj.png"/>}
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
            image={<img alt="" src="https://i.imgur.com/RoHr7vc.png"/>}
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
            image={<img alt="" src="https://i.imgur.com/gUWFKlj.png"/>}
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
            image={<img alt="" src="https://i.imgur.com/RoHr7vc.png"/>}
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
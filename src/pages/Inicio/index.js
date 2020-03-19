import React, {useEffect, useState} from 'react';
import { Parallax, Tabs, Tab, Caption } from 'react-materialize';

const Inicio = () => {

    const contentStyle = {
      paddingRight: 0,
      paddingLeft: 0,
    };
    
    const contentAlignStyle = {
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      };

    const titulos = {
        quemSomos: "Quem Somos?",
        reformas: "Somos uma empresa especializada",
        brinquedos: "Somos uma empresa especializada",
        locacoes: "Somos uma empresa especializada",
        decoracoes: "Somos uma empresa especializada",
    };


    return (
      <div style={contentStyle}>
        
{/* PARALLAX INICIAL + LOGOTIPO EMPRESA + TEXTO*/}
        <Parallax
            image={<img alt="" src="https://i.imgur.com/RoHr7vc.png"/>}
            options={{
                responsiveThreshold: 0
            }}
        >     
            <div style={contentAlignStyle}>
                <img alt="" width="200" src="https://i.imgur.com/aeZYg17.png"/>
            </div>
            <div style={contentAlignStyle} >
                <h2 className="header">
                    BRINQUEDOS
                </h2>
            </div>
        </Parallax>

{/* WHITE SPACE */}
        <div className="section white">
            <div className="row container">
            
            </div>
        </div>

{/* CONTEUDO QUEM SOMOS*/}
        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    {titulos.quemSomos}
                </h2>
                 
            </div>
            <div className="row container">
                <div className="grey-text text-darken-3 lighten-3">
                    Somos uma empresa especializada em: <br/>
                    <b>
                        <p>&nbsp;✓ Locacao de espacos para festas com decoracoes sob demanda(opcional).<br/></p>
                        <p>&nbsp;✓ Locacao de brinquedos, mesas e cadeiras sob encomenda.<br/></p>
                        <p> &nbsp;✓ Reformas de diversos brinquedos inflaveis.<br/></p>
                    </b>              
                </div>

{/* QUEM SOMOS TABS*/}
                <Tabs
                    className="tabs-fixed-width"
                    options={{
                        swipeable: true
                    }}
                    >
                    <Tab  
                        options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: true
                        }}
                        title="👇"
                    >
                        <h5 style={contentAlignStyle} className="light text-lighten-3">
                        Sua Festa comeca aqui! 📲
                        </h5>
                        <img alt="" src="http://lorempixel.com/780/580/nature/1"/>
                    </Tab>
                    <Tab  
                        options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: true
                        }}
                        title="👇"

                    >
                        <h5 style={contentAlignStyle} className="light text-lighten-3">
                            Diversao garantida! 🎉
                        </h5>
                        <img alt="" src="http://lorempixel.com/780/580/nature/2"/>
                    </Tab>
                    <Tab  
                        options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: true
                        }}
                        title="👇"

                >
                        <h5 style={contentAlignStyle} className="light text-lighten-3">
                        Locacoes a pronta entrega! ⏱
                        </h5>
                        <img alt="" src="http://lorempixel.com/780/580/nature/3"/>
                    </Tab>  
                    <Tab  
                        options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: true
                        }}
                        title="👇"

                    >
                        <h5 style={contentAlignStyle} className="light text-lighten-3">
                            Comprometimento! 📝
                        </h5>
                        <img alt="" src="http://lorempixel.com/780/580/nature/4"/>
                    </Tab>  
                    <Tab  
                        options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: true
                        }}
                        title="👇"

                    >
                        <h5 style={contentAlignStyle} className="light text-lighten-3">
                            Qualidade e Seguranca! 🛡
                        </h5>
                        <img alt="" src="http://lorempixel.com/780/580/nature/1"/>
                    </Tab>  
                </Tabs>
            </div>
        </div>

{/* 4 IMAGEM QUEM SOMOS SLIDER*/}

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
            image={<img alt="" src="https://lh5.googleusercontent.com/p/AF1QipN3AOH01OZG2s2AYjda32XwVOs_6PlxTROtZryV=w540-h536-p-k-no"/>}
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
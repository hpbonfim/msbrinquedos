import React from 'react';
import { Parallax} from 'react-materialize';
import QuemSomos from "../QuemSomos";
//import Brinquedos from '../Catalogo/Brinquedos';
import Salao from '../Salao';
import OutrosDesktop from '../CatalogoDesktop/Outros';
import BrinquedosDesktop from '../CatalogoDesktop/Brinquedos';



const InicioDesktop = () => {

    const contentStyle = {
      paddingRight: 0,
      paddingLeft: 0,
    };
    
    const contentAlignStyle = {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center"
      };

    const backgroundImage = {
        logotipo: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/logo.png?alt=media&token=b9554090-f2fc-49b8-abff-507ac8189fa3",
        first: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/fundo-baloes-azul.png?alt=media&token=cbeeaf93-4cc1-4cc6-994e-a28aff2025ff",
        second: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/fundo-brinquedos4.jpg?alt=media&token=41e1db7c-7ce0-40ad-854c-183c1921cf95",
        three: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/fundo-brinquedos1.jpg?alt=media&token=71ae6696-f636-4041-b38a-700aae0a0fe2",
        four: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/fundo-brinquedos.jpg?alt=media&token=404d6225-7176-457c-969f-9020a7751eb2",
        five: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/fundo-nuvem.png?alt=media&token=4b2c3310-27ff-42af-b8ae-8fef877f7b2d"
    };


    return (
      <div style={contentStyle}>
        
{/* PARALLAX INICIAL + LOGOTIPO EMPRESA + TEXTO*/}
        <Parallax
            image={<img alt="" src={backgroundImage.first} />}
            options={{ responsiveThreshold: 0 }}
        >     
            <div style={contentAlignStyle}>
                <img alt="" width="200" src={backgroundImage.logotipo}/>
            </div>
            <div style={contentAlignStyle} >
                <h3 className="header">
                    BRINQUEDOS
                </h3>
            </div>
        </Parallax>


{/* CONTEUDO QUEM SOMOS*/}
        <div className="section white">
           <QuemSomos/>
        </div>

        <Parallax
            image={<img alt="" src={backgroundImage.second} />}
            options={{ responsiveThreshold: 0 }}
        />
{/*CATALOGO*/}
{/*OUTROS*/}
        <div className="section white">
            <OutrosDesktop/>
        </div>

        <Parallax
            image={<img alt="" src={backgroundImage.three} />}
            options={{ responsiveThreshold: 0 }}
            />

{/*BRINQUEDOS*/}
        <div className="section white">
                <BrinquedosDesktop/>
        </div>


{/*PARALLAX ESPACO PARA FESTAS*/}
        <Parallax
            image={<img alt="" src={backgroundImage.four}/>}
            options={{ responsiveThreshold: 0 }}
        />

        <div className="section white">
           <Salao/>
        </div>

        <Parallax
            image={<img alt="" src={backgroundImage.five} />}
            options={{ responsiveThreshold: 0 }}
        />

      </div>
    );
  };
  
export default InicioDesktop;
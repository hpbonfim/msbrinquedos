import React from 'react';
import { Parallax} from 'react-materialize';
import QuemSomos from "../QuemSomos";
//import Brinquedos from '../Catalogo/Brinquedos';
import Salao from '../Salao';
import OutrosDesktop from '../CatalogoDesktop/Outros';
import BrinquedosDesktop from '../CatalogoDesktop/Brinquedos';
import SlideTabs from '../../components/SlideTabs';



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

    const blurBackground1 = {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/blur.jpg?alt=media&token=b3d44a0e-04ef-4693-bfde-e9d361946775")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const blurBackground2 = {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/blur1.jpg?alt=media&token=ba0d109c-ee11-431c-b8a1-5b73945b8170")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const blurBackground3 = {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/blur-3.png?alt=media&token=3b03b1c8-a5cc-4af2-a205-7c36b12e27fa")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
      <div style={contentStyle}>
        
{/* PARALLAX INICIAL + LOGOTIPO EMPRESA + TEXTO*/}
        <Parallax
            image={<img alt="" src={backgroundImage.first} />}
            options={{ responsiveThreshold: 0 }}
        >     
            <br/>
            <br/>
            <br/>

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
        <div className="section white"  >
           <QuemSomos/>
        </div>

        <Parallax
            image={<img alt="" src={backgroundImage.second} />}
            options={{ responsiveThreshold: -100 }}
        >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Parallax>
{/*SLIDETABS*/}

        <SlideTabs/>
{/*CATALOGO*/}
{/*OUTROS*/}
        <div className="section white">
            <h3 style={contentAlignStyle} className="header">
            Catálogo
            </h3>
            <b><h4 className="grey-text text-darken-3 lighten-3" style={contentAlignStyle}>Locação de Mesas, Cadeiras e Barracas</h4></b>              
        </div>
        <div className="section white" style={blurBackground1}>
            <OutrosDesktop/>
        </div>

        <Parallax
            image={<img alt="" src={backgroundImage.three} />}
            options={{ responsiveThreshold: -100 }}
            />

{/*BRINQUEDOS*/}
        <div className="section white"  >
            <b><h3 className="grey-text text-darken-3 lighten-3" style={contentAlignStyle}>Locação de Brinquedos</h3></b>    
        </div>
        <div className="section white" style={blurBackground2}>
                <BrinquedosDesktop/>
        </div>


{/*PARALLAX ESPACO PARA FESTAS*/}
        <Parallax
            image={<img alt="" src={backgroundImage.four}/>}
            options={{ responsiveThreshold: 0 }}
        />

        <div className="section white" style={blurBackground3}>
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
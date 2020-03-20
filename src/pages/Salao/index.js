import React from 'react';
import { MediaBox } from 'react-materialize';


const Salao = () => {

    const contentAlignStyle = {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center"
      };


    return (
        <div>
            <div className="row container">
                <h3 className="header" style={contentAlignStyle}>
                    Locacao de Espaco para Festas
                </h3>
                <h6 style={contentAlignStyle}>Excelente espaco para realizacoes de pequenas e medios eventos:</h6> <br/>
            </div>
            <div style={contentAlignStyle}>
                <MediaBox
                    options={{
                        inDuration: 275,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200
                    }}
                    >
                    <img
                        alt=""
                        src="https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/salao-decoracao.jpg?alt=media&token=697a9223-4802-4e86-94aa-b264fc28a599"
                        width="300" height="300"
                    />
                    </MediaBox>
            </div>
            <div  className="grey-text text-darken-3 lighten-3">
                <b >
                    <p style={contentAlignStyle}>&nbsp;✓ Espacos para festas com decoracoes sob demanda(opcional).<br/></p>
                    <p style={contentAlignStyle}> &nbsp;✓ Diversos brinquedos para livre utilizacao.<br/></p>
                    <p style={contentAlignStyle}>&nbsp;✓ Mesas e cadeiras a disposicao.<br/></p>
                </b>              
            </div>
      </div>
    );
  };
  
export default Salao;
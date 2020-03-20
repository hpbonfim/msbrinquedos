import React from 'react';
import { Table, CardPanel } from 'react-materialize';


const OutrosDesktop = () => {

    const contentAlignStyle = {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center"
      };

    
    const imagens = {
        mesa: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/mesa-de-plastico.png?alt=media&token=b2330857-f236-483e-bba3-9c120e2bcfd4",
        cadeira: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/cadeiras-de-plastico.png?alt=media&token=a3c719b4-17ae-4b71-9c12-77323d64bf1a",
        barracaPipoca: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/barraca-de-pipoca.jpg?alt=media&token=cb2e01aa-fb69-4f6a-a026-dc5cc4130ba4",
        barracaAlgodao: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/barraca-algodo-doce.jpg?alt=media&token=97906289-39d3-4206-8241-28eaaaa74f28",
    };

    return (
        <div>
{/*CATALOGO*/}
            <div className="row container">
                <h3 style={contentAlignStyle} className="header">
                    Catalogo
                </h3>
                
{/*LOCACAO DE MESAS E CADEIRAS*/}
            <b><h4 className="grey-text text-darken-3 lighten-3" style={contentAlignStyle}>Locação de Mesas, Cadeiras e Barracas</h4></b>              
            <Table>
                <tbody>
                    <tr>
                        <td>
                            <div style={contentAlignStyle}>
                                <CardPanel>
                                    <img width="100" height="100" src={imagens.cadeira}/>
                                    <p><b>Cadeiras</b></p>
                                </CardPanel>
                            </div>
                        </td>
                        <td>
                            <div style={contentAlignStyle}>
                                <CardPanel>
                                    <img width="100" height="100" src={imagens.mesa}/>
                                    <p><b>Mesas</b></p>
                                </CardPanel>
                            </div>
                        </td>
                        <td >
                            <div style={contentAlignStyle}>
                                <CardPanel>
                                    <img width="100" height="100" src={imagens.barracaPipoca} style={contentAlignStyle}/>
                                    <p><b>Barraca de <br/> Pipocas</b></p>
                                </CardPanel>
                            </div>
                        </td>
                        <td >
                            <div style={contentAlignStyle}>
                                <CardPanel>
                                    <img width="100" height="100" src={imagens.barracaAlgodao} />
                                    <p><b>Barraca de <br/> Algodão doce</b></p>
                                </CardPanel>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
    );
  };
  
export default OutrosDesktop;
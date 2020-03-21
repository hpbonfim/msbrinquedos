import React from 'react';
import { CardPanel, Table, MediaBox } from 'react-materialize';


const Brinquedos = () => {

    const contentAlignStyle = {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      };

    
    const imagens = {
        cotonete: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/cotonete.jpeg?alt=media&token=67466c01-3b9b-46e4-8115-8baf9ec7eec5",
        touroMecanico: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/touro-mecanico2.jpeg?alt=media&token=814a5d7e-5b5d-4eaf-8a81-51412f73b697",
        tomboLegal: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/tombo-legal.jpg?alt=media&token=c5f009c3-09a7-4f87-b1f4-0b9937ba7861",
        castelinho: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/castelinho.jpeg?alt=media&token=8acb8b59-cb82-497f-8c1d-4476a6fb4002",

        pulaPeq: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/pula-pula-p.jpeg?alt=media&token=4bc1380c-2028-48dc-8f7c-97fcb92b0412",
        pulaMed: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/piscina-bolinha-m.jpeg?alt=media&token=71a3c654-3fb9-478c-bd48-970bdd4bc1cb",
        pulaGra: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/pula-pula-g.jpeg?alt=media&token=7c451266-4035-4305-b121-a1abbcc925d8",
        kidPlay: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/kid-play.jpeg?alt=media&token=5c6339bb-7386-4a82-a551-f124070740d0",

        piscinaBolinhaPeq: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/piscina-bolinha2.jpeg?alt=media&token=c246cf5c-5e41-4cca-8938-1592f9828448",
        piscinaBolinhaGra: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/piscina-bolinha-m.jpg?alt=media&token=0dc32f3e-a455-42c3-8b5c-26cc7a9fa050",
        tobogaPeq: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/mini-escorregador.jpg?alt=media&token=276ae317-6053-49a2-958e-b1dce1367da4",
        tobogaGra: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/escorregador.jpeg?alt=media&token=4af9a7bf-8089-4202-8fa2-5c3c2c2c42cc"
    };

    return (
        <div>
{/*CATALOGO*/}
{/*LOCACAO DE BRINQUEDOS*/}
            <Table>
                <tbody>
{/* TABLE CARD 1*/}
                    <tr>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={ imagens.cotonete }/>

                                    </MediaBox>
                                <p><b> Luta de <br/> Cotonetes</b></p>
                            </CardPanel>
                        </td>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={ imagens.touroMecanico }/>

                                </MediaBox>
                                <p><b> Touro<br/>Mecânico </b></p>
                            </CardPanel>
                        </td>
                    </tr>
{/* TABLE CARD 2*/}
                    <tr>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={ imagens.tomboLegal }/>

                                </MediaBox>
                                <p><b> Tombo Legal</b></p>
                            </CardPanel>
                    </td>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={ imagens.castelinho }/>

                                </MediaBox>
                                <p><b>Castelinho </b></p>
                            </CardPanel>
                        </td>
                    </tr>
{/* TABLE CARD 3*/}
                    <tr>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={ imagens.pulaPeq }/>

                                </MediaBox>
                                <p><b>Pula-Pula<br/>Pequeno </b></p>
                            </CardPanel>
                        </td>
                                               <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={ imagens.pulaMed }/>

                                </MediaBox>
                                <p><b>Pula-Pula<br/>Médio </b></p>
                            </CardPanel>
                        </td>
                    </tr>
{/* TABLE CARD 4*/}
                    <tr>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={ imagens.pulaGra }/>

                                </MediaBox>
                                <p><b>Pula-Pula<br/>Grande </b></p>
                            </CardPanel>
                        </td>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={ imagens.kidPlay }/>

                                </MediaBox>
                                <p><b>Brinq <br/>Play </b></p>
                            </CardPanel>
                        </td>
                    </tr>
{/* TABLE CARD 5*/}
                    <tr>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={ imagens.piscinaBolinhaPeq }/>

                                </MediaBox>
                                <p><b> Piscina de<br/>Bolinha<br/>Pequeno</b></p>
                            </CardPanel>
                        </td>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={ imagens.piscinaBolinhaGra }/>

                                </MediaBox>
                                <p><b> Piscina de<br/>Bolinha<br/>Grande</b></p>
                            </CardPanel>
                        </td>
                    </tr>
{/* TABLE CARD 6*/}
                    <tr>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                        <img width="100" height="100" src={imagens.tobogaPeq }/>

                                </MediaBox>
                                <p><b> Tobogã<br/>Pequeno</b></p>
                            </CardPanel>
                        </td>
                        <td>
                            <CardPanel style={contentAlignStyle}>
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
                                    <img width="100" height="100" src={ imagens.tobogaGra }/>
                                </MediaBox>
                                <p><b>Tobogã<br/>Grande </b></p>
                            </CardPanel>
                        </td>
                    </tr>       
                </tbody>
            </Table>
    </div>
    );
  };
  
export default Brinquedos;
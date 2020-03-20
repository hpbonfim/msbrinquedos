import React from 'react';
import {Tabs, Tab} from 'react-materialize';

const QuemSomos = () => {

    const contentAlignStyle = {
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      };

    const imagens = {
        slide1: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/slider-briquedo.jpg?alt=media&token=f58dfda5-d7ce-4225-a4f4-0e11bea27356",
        slide2: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/jump-zone.jpeg?alt=media&token=84130414-ae06-4ecd-8274-14c65a2f4305",
        slide3: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/kid-play.jpeg?alt=media&token=5c6339bb-7386-4a82-a551-f124070740d0",
        slide4: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/escorregador2.jpeg?alt=media&token=4ab84fe1-d202-40e4-8ca6-79eab38e83f9",
        slide5: "https://firebasestorage.googleapis.com/v0/b/ms-brinquedos.appspot.com/o/touro-mecanico2.jpeg?alt=media&token=814a5d7e-5b5d-4eaf-8a81-51412f73b697",
    };


    return (
        <div>
{/* CONTEUDO QUEM SOMOS*/}
            <div className="row container" style={{textAlign: "center"}}>
                <h3 className="header" >
                    Quem Somos?
                </h3>
            </div>
            <div className="row container" style={{textAlign: "center"}}>
                <div className="grey-text text-darken-3 lighten-3">
                    <h5>Somos uma empresa especializada em: </h5><br/>
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
                        <img alt="" src={imagens.slide1}/>
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
                        <img alt="" src={imagens.slide2} />
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
                        <img alt="" src={imagens.slide3}/>
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
                        <img alt="" src={imagens.slide4}/>
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
                        <img alt="" src={imagens.slide5}/>
                    </Tab>  
                </Tabs>
            </div>
      </div>
    );
  };
  
export default QuemSomos;
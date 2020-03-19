import React from 'react';
import { Parallax, Tabs, Tab, Table, Card, CardTitle, MediaBox} from 'react-materialize';

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
                <h3 className="header">
                    BRINQUEDOS
                </h3>
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
                <h3 className="header">
                    {titulos.quemSomos}
                </h3>
                 
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
                        <img alt="" src="https://i.imgur.com/RoHr7vc.png"/>
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
                        <img alt="" src="https://i.imgur.com/RoHr7vc.png"/>
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
                        <img alt="" src="https://i.imgur.com/RoHr7vc.png"/>
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
                        <img alt="" src="https://i.imgur.com/RoHr7vc.png"/>
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
                        <img alt="" src="https://i.imgur.com/RoHr7vc.png"/>
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
{/*CATALOGO*/}
        <div className="section white">
            <div className="row container">
                <h3 style={contentAlignStyle} className="header">
                    Catalogo
                </h3>

{/*LOCACAO DE MESAS E CADEIRAS*/}
                <b><h4 className="grey-text text-darken-3 lighten-3" style={contentAlignStyle}>Locacao de Mesas e Cadeiras</h4></b>              
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                        </tr>
                    </tbody>
                </Table>

{/*LOCACAO DE BRINQUEDOS*/}
                <b><h4 className="grey-text text-darken-3 lighten-3" style={contentAlignStyle}>Locacao de Brinquedos</h4></b>              
                <Table>
                    <tbody>
{/* TABLE CARD 1*/}
                        <tr>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                        </tr>
{/* TABLE CARD 2*/}
                        <tr>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                        </tr>
{/* TABLE CARD 3*/}
<tr>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                        </tr>
{/* TABLE CARD 4*/}
<tr>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                        </tr>
{/* TABLE CARD 5*/}
                        <tr>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                        </tr>
{/* TABLE CARD 6*/}
                        <tr>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                            <td>
                                <Card header={<CardTitle image="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"></CardTitle>}>
                                    <p>Altura:</p>
                                    <p>Largura:</p>
                                    <p>Comprimento:</p>
                                    <p>Preco:</p>
                                </Card>
                            </td>
                        </tr>       
                    </tbody>
                </Table>
            </div>
        </div>

{/*PARALLAX ESPACO PARA FESTAS*/}
        <Parallax
            image={<img alt="" src="https://lh5.googleusercontent.com/p/AF1QipN4siaiLl9sAwpYzJ54ezyfELJ1MI-sRukuXUHS=w540-h889-p-k-no"/>}
            options={{
            responsiveThreshold: 0
            }}
        />

        <div className="section white">
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
                        src="https://lh5.googleusercontent.com/p/AF1QipMwYzQOEjsQChahHzaKKltvNPk9xYl2PnHl2wkR=w540-h585-p-k-no"
                        width="350"
                    />
                    </MediaBox>
            </div>
            <div  className="grey-text text-darken-3 lighten-3">
                <b >
                    <p style={contentAlignStyle}>&nbsp;✓ Espacos para festas com decoracoes sob demanda(opcional).<br/></p>
                    <p style={contentAlignStyle}>&nbsp;✓ Mesas e cadeiras a disposicao.<br/></p>
                    <p style={contentAlignStyle}> &nbsp;✓ Diversos brinquedos para livre utilizacao.<br/></p>
                </b>              
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
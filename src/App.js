import React, { Component } from "react";
import Inicio from "./pages/Inicio";

import Footer from "./components/Footer";
import FooterDesktop from "./components/FooterDesktop";
import FloatButton from "./components/FloatButton";
import InicioDesktop from "./pages/InicioDesktop";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const { windowWidth } = this.state;

    const sidebarCollapsed = windowWidth < 1100;

    // CSS TOPBAR
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 30,
      mobileVersion: windowWidth < 800,
      sidebarCollapsed,
      sidebarWidth: sidebarCollapsed ? 45 : 150,
      position: "fixed",
      display: "flex"
    };

    return (
      <div
        style={{
          backgroundColor: styles.white(0.05),
          minHeight: "100vh",
          position: "relative"
        }}
      >
{/*VERSAO DESKTOP*/}

      {!styles.mobileVersion && ( <InicioDesktop />  )}
      {!styles.mobileVersion && ( <FooterDesktop />  )}
      
{/*VERSAO MOBILE*/}

      {styles.mobileVersion && ( <Inicio  styles={styles}/> )}
      {styles.mobileVersion && ( <FloatButton/> )}
      {styles.mobileVersion && ( <Footer />  )}

      </div>
    );
  }
}

export default App;
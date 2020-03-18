import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import Inicio from "./pages/Inicio";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";


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

    // CSS MOBILE TOPBAR
    const styles = {
      green: (opacity = 1) => `rgba(37,211,102, ${opacity})`,
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      pink: (opacity = 1) => `rgba(228,64,95, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 30,
      showFooterMenuText: windowWidth > 500,
      showSidebar: windowWidth > 768,
      sidebarCollapsed,
      sidebarWidth: sidebarCollapsed ? 45 : 150
    };

    // CSS DESKTOP TOPBAR
    const stylesDesktop = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      sidebarCollapsed,
      sidebarWidth: sidebarCollapsed ? 45 : 150
    };

    // CSS SOCIAL ICONS
    const logoWhiteStyle = {
      textAlign: "center",
      color: styles.white(),
      marginBottom: 60,
      fontWeight: "bold"
    };

    // CSS SOCIAL ICONS
    const logoInstagramStyle = {
      textAlign: "center",
      color: styles.pink(),
      marginBottom: 60,
      fontWeight: "bold"
    };

    // CSS SOCIAL ICONS
    const logoWppStyle = {
      textAlign: "center",
      color: styles.green(),
      marginBottom: 60,
      fontWeight: "bold"
    };
    
    const menuItems = [
      { icon: <a style={logoInstagramStyle} href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>, text: "Instagram" },
      { icon: <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>, text: "Facebook" },
      { icon: <a style={logoWppStyle} href="#" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>, text: "WhatsApp" },
      { icon: <a style={logoWhiteStyle} href="#" target="_blank"><FontAwesomeIcon icon={faPhoneSquareAlt} /></a>, text: "Telefone" },
      { icon: <a style={logoWhiteStyle} href="#" target="_blank"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>, text: "Email" }
    ];

   
    return (
      <div
        style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative"
        }}
        
      >
        {styles.showSidebar ? (  <TopBar styles={stylesDesktop} /> ) : ( <TopBar styles={styles} /> )}

        <Inicio styles={styles} />

        {!styles.showSidebar && (
          <FooterMenu menuItems={menuItems} styles={styles} />
        )}
      </div>
    );
  }
}

export default App;
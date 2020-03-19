import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
const background = "https://i.imgur.com/h4hB86m.png?2";
const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: styles.white(),
    backgroundImage: `url(${background})`,
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "10px 5px",
    boxSizing: "border-box",

  };

  return (
    <div style={topBarStyle}>
    <HashRouter>
      <img src="https://i.imgur.com/aeZYg17.png" alt="MS" height="42" width="42"/>
        |<NavLink to="/">Inicio</NavLink>|
        <NavLink to="/">Locacoes</NavLink>|
        <NavLink to="/">Reformas</NavLink>|
        <NavLink to="/">Contato</NavLink>|
      <img src="https://i.imgur.com/O3fGyod.png" alt="MS" height="42" width="42"/> 
    </HashRouter>

  </div>
  );
};

export default TopBar;
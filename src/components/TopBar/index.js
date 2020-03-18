import React from 'react';
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
      <img src="https://i.imgur.com/aeZYg17.png" alt="MS" height="42" width="42"/> 
      |<a href="#" style={{color: `${styles.black()}`}}>Inicio</a>|
      <a href="#" style={{color: `${styles.black()}`}}>Reformas</a>|
      <a href="#" style={{color: `${styles.black()}`}}>Locacoes</a>|
      <a href="#" style={{color: `${styles.black()}`}}>Contato</a>|
      <img src="https://i.imgur.com/O3fGyod.png" alt="MS" height="42" width="42"/> 

    </div>
  );
};

export default TopBar;
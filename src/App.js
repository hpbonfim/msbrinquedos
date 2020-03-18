import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Routes from './routes';

import GlobalStyle, { Container } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Topbar />
      <Container>
        <Sidebar />
        <Routes />
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
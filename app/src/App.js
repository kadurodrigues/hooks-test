import React from 'react';
import GlobalStyle, { Container } from './assets/styles/global';
import Routes from './routes';
import Header from './components/Header';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Container>
      { Routes }
    </Container>
  </>
)

export default App;

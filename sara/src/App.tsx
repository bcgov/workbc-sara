import React from 'react';
import './App.scss';
import Footer from './footer';
import Header from './header';
import Keycloak from 'keycloak-js'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

const keycloak = new Keycloak('./keycloak.json');


const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens)
}

const keycloakProviderInitConfig = {
 
}

function App() {
  return (
    <React.StrictMode>
      <ReactKeycloakProvider
        authClient={keycloak}
        onEvent={eventLogger}
        onTokens={tokenLogger}
        initOptions={keycloakProviderInitConfig}
      >
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </ReactKeycloakProvider>
    </React.StrictMode>
  );
}

export default App;
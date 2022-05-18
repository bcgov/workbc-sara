import React from 'react';
import './App.scss';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Keycloak from 'keycloak-js'
import { ReactKeycloakProvider } from '@react-keycloak/web'

const keycloak = new Keycloak({
  realm: process.env.REACT_APP_KEYCLOAK_REALM || "",
  url: process.env.REACT_APP_KEYCLOAK_URL || "",
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || "",
})

const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens)
}

function App() {
  return (
    <React.StrictMode>
      <ReactKeycloakProvider
        authClient={keycloak}
        onEvent={eventLogger}
        onTokens={tokenLogger}
      >
        <div className="App d-flex flex-column min-vh-100">
          <Header />
          <Home />
          <Footer />
        </div>
      </ReactKeycloakProvider>
    </React.StrictMode>
  );
}

export default App;

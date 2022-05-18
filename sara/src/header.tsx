import React, { useState, useEffect } from "react";
import logo from './bcid-logo-rev-en.svg'
import logoSmall from './bcid-symbol-rev.svg'
import { KeycloakClient, KeycloakInitOptions } from '@react-keycloak/keycloak-ts'
import MyCustomAdapter from './adapter.js'

function initKeycloak(){
  const keycloak = new KeycloakClient({
    url: "https://dev.oidc.gov.bc.ca/auth/",
    realm: '4piqfpfu',
    clientId: 'web'
  });
  
  const initialized = keycloak.init({
    adapter: MyCustomAdapter,
  });
}

function Header(){
  
  const [permissions, setPermissions] = useState();
  
  

    return(
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="https://www2.gov.bc.ca">
              <img 
                className="img-fluid d-none d-md-block"
                src={logo}
                width="177"
                height="44"
                alt="B.C. Government Logo" />
              <img 
                className="img-fluid d-md-none" 
                src={logoSmall}
                width="63" 
                height="44" 
                alt="B.C. Government Logo" />
            </a>
            <div className="navbar-brand">
              SARA
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="/">Home</a>
              </div>
            </div>
            <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              {
                <>
                  {(!keycloak.authenticated) ?
                    <a className="btn btn-bcgold" href="/loginLanding">Login</a>
                    :
                    <a className="btn btn-bcgold" href={`https://logontest7.gov.bc.ca/clp-cgi/logoff.cgi?retnow=1&returl=${keycloak.createLogoutUrl({redirectUri: `${window.location.origin}/logoutSuccess`})}`}>Logout</a>
                  }
                </>
              }
            </li>
          </ul>
          </div>
        </nav>
      </header>
    )
}

export default Header;
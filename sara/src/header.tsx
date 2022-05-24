import React, { useState, useEffect } from "react";
import logo from './bcid-logo-rev-en.svg'
import logoSmall from './bcid-symbol-rev.svg'
import { useKeycloak } from '@react-keycloak/web';

function Header(){
  
  const [permissions, setPermissions] = useState();
  const { keycloak, initialized } = useKeycloak();
  console.log(keycloak);
  

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
            <div className="navbar" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="/">Home</a>
              </div>
            </div>
            <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              {
                <>
                  {(true) ?
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
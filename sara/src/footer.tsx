import React from 'react';

function Footer() {
    return (
      <footer className='mt-auto'>
        <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className="container">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a 
              className='nav-link'
              target='_blank'
              rel=' noopener noreferrer'
              href='https://www2.gov.bc.ca/gov/content/home/disclaimer'>
              Disclaimer
              </a>
            </li>
            <li className="nav-item">
              <a 
              className='nav-link'
              target='_blank'
              rel='noopner noreferrer'
              href='https://www2.gov.bc.ca/gov/content/home/privacy'>

              Privacy
              </a>
            </li>
            <li className="nav-item">
              <a 
              className='nav-link'
              target='_blank'
              rel='noopner noreferrer'
              href='https://www2.gov.bc.ca/gov/content/home/accessibility'>

              Accessibility
              </a>
            </li>
            <li className="nav-item">
              <a 
              className='nav-link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www2.gov.bc.ca/gov/content/home/copyright'>

              Copyright
              </a>
            </li>
            <li className="nav-item">
              <a 
              className='nav-link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www2.gov.bc.ca/gov/content/home/contact-us'>

              Contact Us
              </a>
            </li>
          </ul>
        </div>
        </nav>
      </footer>
    )}   
export default Footer;
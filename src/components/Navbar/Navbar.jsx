import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin, faFacebook   } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="container-fluid d-flex justify-content-between align-items-center bg-light" >
        <h1 className='logo'>Kelly- React</h1>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <a className="nav-link  ps-0" aria-current="page" href="home">Home</a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link  ps-0" aria-current="page" href="about">About</a>
                  </li>
                 
                  <li className="nav-item">
                    <a className="nav-link  ps-0" aria-current="page" href="resume">Resume</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link  ps-0" aria-current="page" href="services">Services</a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link  ps-0" aria-current="page" href="portfolio">Protfolio</a>
                  </li>
                 
                  <li className="nav-item">
                    <a className="nav-link active ps-0" aria-current="page" href="contact">Contact</a>
                  </li>
                 
                
                </ul>
                
            </div>
        </nav>
        <div className="header-social-links">
          <Link to="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          
        </div>
    </div> 

  )
}

export default Navbar
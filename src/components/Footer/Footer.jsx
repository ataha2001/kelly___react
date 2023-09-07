import React from 'react'

import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <footer id="footer">
    <div className="container">
    <div className="copyRight">
    
    © Copyright 
    <strong>Kelly</strong>
    . All Rights Reserved
      
            </div>
            <div className="credits">
            
            Designed by 
            <a href="https://bootstrapmade.com/" >
            BootstrapMade
            </a>
            </div>
            </div>
            </footer>
            
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center" >
                
            <Icon.ArrowUpCircle size={100}  />
            </a>
            <button  onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }} className="back-to-top d-flex align-items-center justify-content-center border-0">
              <Icon.ArrowUpCircle size={100}  />
            </button>
            </>
  )
}

export default Footer
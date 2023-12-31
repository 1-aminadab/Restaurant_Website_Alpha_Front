import React, { useState, useEffect } from 'react';
import logoSvg from '../assets/images/logo.svg';
import { GrLanguage } from "react-icons/gr";
import { FindTable } from '../../../components/common/Texts';
import LanguageList from './LanguageList'
const Header = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)
  const [headerVisible, setHeaderVisible] = useState(true)




  const [sidebar, setSidebar] = useState(false)

useEffect(()=>{
  const handleScroll = ()=>{
    const currentScrollPos = window.scrollY
    const isScrollingDown = prevScrollPos < currentScrollPos
    setHeaderVisible(!isScrollingDown)
    setPrevScrollPos(currentScrollPos)

    
  }
  window.addEventListener('scroll',handleScroll)
  return()=>{
    window.removeEventListener('scroll',handleScroll)
  }
},[prevScrollPos])

console.log(prevScrollPos);
  return (
    <header className={`header   ${!headerVisible ?  'hide'  : ''}`} data-header>
      <h6>{scroll}</h6>
      <div className="container">
        <a href="#top" className="logo">
          <img src={logoSvg} width="160" height="50" alt="sole - Home" />
        </a>

        <nav className={`navbar   ${sidebar && "active"}`} data-navbar>
          <button onClick={()=>setSidebar(false)} className="close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          <a href="#" className="logo">
            <img src={logoSvg} width="160" height="50" alt="sole - Home" />
          </a>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#top" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Home</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#menu" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Menus</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">About Us</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Our Chefs</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="/contact" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span  className="span">Contact</span>
              </a>
            </li>
          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>
            <address className="body-4">
              Restaurant St, Delicious City, <br />
              London 9578, UK
            </address>
            <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
            <a href="mailto:booking@sole.com" className="body-4 sidebar-link">
              booking@sole.com
            </a>
            <div className="separator"></div>
            <p className="contact-label">Booking Request</p>
            <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
              +88-123-123456
            </a>
          </div>
        </nav>
         <div>
        
         <LanguageList />
         </div>
        <a href="#" className="btn btn-secondary">
          <span className="text text-1"><FindTable /></span>
          <span className="text text-2" aria-hidden="true">
           <FindTable />
          </span>
        </a>

        <button onClick={()=>setSidebar(true)} className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div onClick={()=>setSidebar(false)} className={`overlay  ${sidebar && "active"}`}data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you are using React Router
import logo from '../../assets/img/iqapex-logo-3.png';
import IQ from '../../assets/img/iqapex-logo.png';
import Mobile from './Mobile';
import './Nav.css';

const Nav = () => {
  const [expandedLink, setExpandedLink] = useState(null);
  const [showNav, setShowNav] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
    const [MobileNav,setMobileNav]=useState(null);
  const handleMouseEnter = (link) => {
    setExpandedLink(link);
  };

  const handleMouseLeave = () => {
    setExpandedLink(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Determine the selected link based on the current URL
    const currentPath = window.location.pathname;
    setSelectedLink(currentPath);
  }, []);
  const toggleNav = () => {
    setMobileNav(!MobileNav);
  };

  return (
    <nav className={`navbar ${showNav ? 'fixed-nav' : 'show-nav'} ${expandedLink ? 'expanded' : ''}`}>
      
        <div className="logo" style={{ height: "4rem", width: "9rem" }}>
        <NavLink to="/" style={{ cursor: "pointer" ,zIndex:"1000",position:"relative",display:"flex"}}>
          <img src={logo} alt="Logo" style={{ height: "100%", width: "100%" }} />
          </NavLink>
        </div>
      
      <ul className="nav-links" style={{top:"-3rem",zIndex:"100"}}>
        <li>
          <NavLink to="/" className={selectedLink === '/' ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs" className={selectedLink === '/aboutUs' ? 'active' : ''}>Who We Are</NavLink>
        </li>
        <li className="dropdown" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
          <NavLink to="/services" className={selectedLink === '/services' ? 'active' : ''}>What We Do</NavLink>
          {expandedLink === 'services' && (
            <div className="dropdown-content">
              <div className="submenu">
              
              
                <li><a href=''>Overview</a></li>
                <li ><a href=''>Industries & Domains</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/research-and-development'>Research & Innovation</a></li>
              </div>
              
            </div>
          )}
        </li>
        <li className="dropdown" onMouseEnter={() => handleMouseEnter('event')} onMouseLeave={handleMouseLeave}>
          <NavLink to="/event" className={selectedLink === '/event' ? 'active' : ''}>Events</NavLink>
          {expandedLink === 'event' && (
            <div className="dropdown-content">
              <div className="submenu">
                <NavLink to="/investor">Investors</NavLink>
                <NavLink to="#">Investor 2</NavLink>
                <NavLink to="#">Investor 3</NavLink>
              </div>
             
            </div>
          )}
        </li>
       
        
         
        <li className="dropdown" onMouseEnter={() => handleMouseEnter('contact-us')} onMouseLeave={handleMouseLeave}>
          <NavLink to="/contact-us" className={selectedLink === '/contact-us' ? 'active' : ''}>Contact Us</NavLink>
          {expandedLink === 'contact-us' && (
            <div className="dropdown-content">
              <div className="submenu">
                <NavLink to="/contact-us">Contact Us </NavLink>
                <NavLink to="/contact-us">Call Schedule</NavLink>
                <NavLink to="/contact-us">Form</NavLink>
              </div>
             
            </div>
          )}
        </li>
      </ul>
      <div style={{display:"grid",position:"relative", width:"100vw" ,left:"-2rem",top:"-2rem"}} >
      <div className="burger" onClick={toggleNav}style={{justifySelf:"center"}}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        
      </div>
      
          {MobileNav &&<Mobile/>}
          
      </div>
      <div  className="icon" style={{display:"flex",justifyContent:"flex-end",top:"-7rem",position:"relative",zIndex:"50"}}>
        <img src={IQ} alt="" srcset="" style={{height:"3rem"}} />
      </div>
    </nav>
  );
};

export default Nav;
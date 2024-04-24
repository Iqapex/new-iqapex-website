import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import './Mobile.css';

const Mobile = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [investorsOpen, setInvestorsOpen] = useState(false);

  const toggleServicesDropdown = (e) => {
    e.stopPropagation();
    setServicesOpen((prevState) => !prevState); // Toggle the state
    if (investorsOpen) {
        e.stopPropagation();
      setInvestorsOpen(false); // Close the investors dropdown if it's open
    }
  };

  const toggleInvestorsDropdown = (e) => {
    e.stopPropagation();
    setInvestorsOpen((prevState) => !prevState); // Toggle the state
    if (servicesOpen) {
        e.stopPropagation();
      setServicesOpen(false); // Close the services dropdown if it's open
    }
  };

  // Prevent the event from bubbling up to the parent (dropdown div) when clicking on the link
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="mobile">
      <NavLink to="/" activeClassName="activeLink">Home</NavLink>
      <NavLink to="/aboutUs" activeClassName="activeLink">About Us</NavLink>
      <div className="dropdownM" onClick={toggleServicesDropdown}>
        <span>
          Services <FiChevronDown />
        </span>
        <div className={`dropdown-contentM ${servicesOpen ? 'open' : ''}`}>
          <NavLink to="/services" onClick={stopPropagation}>Services Overview</NavLink>
          <NavLink to="/service1" onClick={stopPropagation}>Service 1</NavLink>
          <NavLink to="/service2" onClick={stopPropagation}>Service 2</NavLink>
          <NavLink to="/service3" onClick={stopPropagation}>Service 3</NavLink>
        </div>
      </div>
      <div className="dropdownM" onClick={toggleInvestorsDropdown}>
        <span >
          Investors <FiChevronDown />
        </span>
        <div className={`dropdown-contentM ${investorsOpen ? 'open' : ''}`}>
          <NavLink to="/investors" onClick={stopPropagation}>Investors Overview</NavLink>
          <NavLink to="/investor1" onClick={stopPropagation}>Investor 1</NavLink>
          <NavLink to="/investor2" onClick={stopPropagation}>Investor 2</NavLink>
          <NavLink to="/investor3" onClick={stopPropagation}>Investor 3</NavLink>
        </div>
      </div>
      <NavLink to="/research-and-development" activeClassName="activeLink">R&D</NavLink>
      <NavLink to="/contact-us" activeClassName="activeLink">Contact</NavLink>
    </div>
  );
};

export default Mobile;

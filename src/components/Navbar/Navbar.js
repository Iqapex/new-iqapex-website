import React, { useContext, useEffect, useState } from 'react';
import { BsPeople } from "react-icons/bs";
import { HiHome } from 'react-icons/hi';
import { MdCall, MdDesignServices, MdMiscellaneousServices } from 'react-icons/md';
import { RiTeamLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/iqapex-logo-3.png';
import IQ from '../../assets/img/iqapex-logo.png';
import { mouseContext } from '../../context/mouseContext';
import classes from './Navbar.module.css';
import Navlink from './Navlink';
const linksArray = [
    ['Home', '/', HiHome], 
    ['About', '/aboutUs',RiTeamLine ], 
    ['Services', '/services', MdMiscellaneousServices], 
    ['Investor', '/investor', BsPeople], 
    ['R&D', '/research-and-development', MdDesignServices], 
    ['Contact Us', '/contact-us', MdCall]
]

const Navbar = () => {
    const { mouseEnterHandler, mouseLeaveHandler, className } = useContext(mouseContext)
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowNav(true)
            } else setShowNav(false)
        })

        return () => {
            window.removeEventListener("scroll", null)
        }
    }, [])

    const path = window.location.pathname.slice(1);
    const newClass = path === '' ? classes.newClass : ""
    const showClass = showNav ? classes.show : ""

    return (
        <nav className={`${classes.navbar} ${newClass} ${showClass}`}>
            {/* ==== Logo ==== */}
            <div className={classes.logo}>
                <NavLink to='/' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>

            {/* ==== Navbar Menu ==== */}
            <div className={classes['navlink-container']}>
                <ul className={classes['nav-links']}>
                    {linksArray.map((link, i) => (
                        <li key={i}>
                            {i < 5 ? (<div className='middle'>
                                <Navlink key={i} menu={link[0]} link={link[1]} Icon={link[2]} clsName={className} mouseEnter={mouseEnterHandler} mouseLeave={mouseLeaveHandler} />
                                </div>
                            ) : (
                                <button
                                    className={classes['contact-button']}
                                    onClick={() => window.location.href = link[1]}
                                >
                                    {link[0]}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
                
            </div>
            <img className={classes['IQ']} src={IQ} alt="" srcset="" style={{height:"3rem",marginRight:"1rem"}} />
        </nav>
    )
}

export default Navbar

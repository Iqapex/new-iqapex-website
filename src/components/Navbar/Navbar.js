import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/iqapex-logo-3.png'
import classes from './Navbar.module.css'
import { mouseContext } from '../../context/mouseContext'
import Navlink from './Navlink'
import {HiHome} from 'react-icons/hi'
import {MdMiscellaneousServices, MdDesignServices, MdCall} from 'react-icons/md'
import {TbWorld} from 'react-icons/tb'

const linksArray = [
    ['Home', '/', HiHome], 
    ['Services', '/services', MdMiscellaneousServices], 
    ['IQVerse', '/iqverse', TbWorld], 
    ['R&D', '/research-and-development', MdDesignServices], 
    ['Contact', '/contact-us', MdCall]
]

const Navbar = () => {
    const {mouseEnterHandler, mouseLeaveHandler, className} = useContext(mouseContext)
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 400){
            setShowNav(true)
        }else setShowNav(false)
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
                  <Navlink key={i} menu={link[0]} link={link[1]} Icon={link[2]} clsName={className} mouseEnter={mouseEnterHandler} mouseLeave={mouseLeaveHandler} />
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
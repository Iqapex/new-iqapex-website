import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navlink.module.css'

const Navlink = ({menu, link, clsName, mouseEnter, mouseLeave, Icon}) => {
  // const activeClass = navData => navData.isActive ? classes.active : ''

  return (
    <>
      <li className={classes['nav-link']}>
        <NavLink to={link} className={(navData) => navData.isActive ? classes.active : ''} onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
          <Icon className={`${classes.icon} ${classes.visible}`} />
          {menu}
          </NavLink>
          {/* <NavLink to={link} className={`${(navData) => navData.isActive ? classes.active : ''} ${clsName}`} onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>{menu}</NavLink> */}
      </li>
    </>
  )
}

export default Navlink
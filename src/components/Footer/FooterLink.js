import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { mouseContext } from '../../context/mouseContext'

const FooterLink = ({link, content}) => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  return (
    <NavLink
      to={`/${link}`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {content}
    </NavLink>
  )
}

export default FooterLink
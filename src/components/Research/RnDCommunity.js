import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import community from '../../assets/vector/community-image.png'
import { mouseContext } from '../../context/mouseContext'
import classes from './RnDCommunity.module.css'

const RnDCommunity = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  return (
    <div className={classes.community}>
        <p className={classes['community-text']} style={{color:"white"}}>We are always looking for highly enthusiatic people who can think in a unique way and innovate new things which can impact on the world. If you are the one, <NavLink to='/careers' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Apply Now</NavLink> to be a part of our most impact impactful Research & Development community.</p>

        <div className={classes['community-image']}>
            <img src={community} alt="community" />
        </div>
    </div>
  )
}

export default RnDCommunity
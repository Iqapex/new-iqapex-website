import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './HiringPost.module.css'
import { mouseContext } from '../../context/mouseContext'

const HiringPost = ({title, desc}) => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)
  return (
    <div className={classes.jobcard}>
        <div className={classes['job-info']}>
            <h2>{title}</h2>
            <p><span>Job Description: </span>{desc}</p>
        </div>
        <NavLink to={`/apply/${title}`} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Apply Now</NavLink>
    </div>
  )
}

export default HiringPost
import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './HiringPost.module.css'

const HiringPost = ({title, desc}) => {
  return (
    <div className={classes.jobcard}>
        <div className={classes['job-info']}>
            <h2>{title}</h2>
            <p><span>Job Description: </span>{desc}</p>
        </div>
        <NavLink to='/' >Apply Now</NavLink>
    </div>
  )
}

export default HiringPost
import React from 'react'
import Navbar from '../Navbar/Navbar'
import classes from './SectionHeading.module.css'

const SectionHeading = ({heading, subheading}) => {
  return (
    <div className={classes.header}>
      <h1>{heading}</h1>
      {subheading}
    </div>
  )
}

export default SectionHeading
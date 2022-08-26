import React from 'react'
import Navbar from '../Navbar/Navbar'
import classes from './PageHeader.module.css'

const PageHeader = ({heading, bgimg}) => {
  return (
    <div className={classes.header}>
      <img className={classes.bgimg} src={bgimg} alt="background" />
      <Navbar />
      <h1>{heading}</h1>
    </div>
  )
}

export default PageHeader
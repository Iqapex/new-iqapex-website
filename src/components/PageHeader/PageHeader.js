import React from 'react'
import Nav from '../NavNew/Nav'
import classes from './PageHeader.module.css'

const PageHeader = ({heading, bgimg}) => {
  return (
    <div className={classes.header}>
      <img className={classes.bgimg} src={bgimg} alt="background" />
      <Nav />
      <h1>{heading}</h1>
    </div>
  )
}

export default PageHeader
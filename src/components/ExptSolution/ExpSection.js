import React from 'react'
import classes from './ExpSection.module.css'

const ExpSection = ({title, content, cardImage}) => {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
          <h2>{title}</h2>
          <p>{content}</p>
      </div>
      <div className={classes['card-image']}>
          <img src={cardImage} alt="expertise-card" />
      </div>
    </div>
  )
}

export default ExpSection
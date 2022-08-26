import React from 'react'
import classes from './SectionCard.module.css'

const SectionCard = ({title, content, cardImage}) => {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
          <h2>{title}</h2>
          <p>{content}</p>
      </div>
      <div className={classes['card-image']}>
          <img src={cardImage} alt="product-engg-card" />
      </div>
    </div>
  )
}

export default SectionCard
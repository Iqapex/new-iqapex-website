import React from 'react'
import classes from './TalentPartnerCard.module.css'

const TalentPartnerCard = ({title, content, cardImage}) => {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
          <h2>{title}</h2>
          <p>{content}</p>
      </div>
      <div className={classes['card-image']}>
          <img src={cardImage} alt="palent-partner-card" />
      </div>
    </div>
  )
}

export default TalentPartnerCard
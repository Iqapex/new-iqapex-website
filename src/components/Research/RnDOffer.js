import React from 'react'
import classes from './RnDOffer.module.css'

const RnDOffer = ({offerTitle, offerImage, altImg, offerArr}) => {
  return (
    <div className={classes['offer-box']}>
        <h3>{offerTitle}</h3>
        <img src={offerImage} alt={altImg} className={classes.image} />
        <ul className={classes.offerlists}>
            {offerArr.map((offer, i) => (
              <li key={i}>{offer}</li>
            ))}
        </ul>
    </div>
  )
}

export default RnDOffer
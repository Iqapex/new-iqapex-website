import React from 'react'
import classes from './RnDoffers.module.css'
import kids from '../../assets/vector/kids.png'
import school from '../../assets/vector/school.png'
import college from '../../assets/vector/college.png'
import RnDOffer from './RnDOffer'

const RnDOffers = () => {
  const kidsOffers = ['Kindergarten']
  const schoolOffers = ['Science/Math till class 10', 'Engineering/Medical for Class 11/12', 'Career Counseling & Guidance']
  const collegeOffers = ['IT/Research', 'Career Counseling & Guidance']
  
  return (
    <div className={classes.container}>

      <div className={classes['offers-box']}>
        <RnDOffer offerTitle="Kids" offerImage={kids} altImg="kids" offerArr={kidsOffers} />
        <RnDOffer offerTitle="School Students" offerImage={school} altImg="School Students" offerArr={schoolOffers} />
        <RnDOffer offerTitle="College Students" offerImage={college} altImg="College Students" offerArr={collegeOffers} />

      </div>
    </div>
  )
}

export default RnDOffers
import React from 'react'
import { useInView } from 'react-intersection-observer';
import classes from './Impact.module.css'
import ImpactCard from './ImpactCard'

const Impact = () => {
  const { ref: myRef, inView } = useInView({threshold: 1, triggerOnce: true});

  return (
    <div className={classes.section}>
        <div className={`section-title ${classes['impact-section']}`}>
          <h1 className='section-heading'>Our Speciality</h1>
          <h5 className='section-subheading'>WHAT WE ARE MASTER AT</h5>
        </div>
        <div ref={myRef} className={classes['impact-cards']}>

          {inView && <><ImpactCard progressEndValue={90} heading='Research' details='We understand the importance of timely completion of our research homework so that suitable analysis and ideas can be incorporated into the plan.' />
          <ImpactCard progressEndValue={90} heading='Innovations' details='The development with the right creativity is what we believe in. As a result, we ensure that your interface looks unique and appealing with our innovation in place.' />
          <ImpactCard progressEndValue={100} heading='Action Plans' details='Our action plans are our strength, we consider right resource mapping within the right space at the right time framework. As a result, our action plans to guide us throughout the project  process.' />
          <ImpactCard progressEndValue={100} heading='Great Tests' details='Every project completed and delivered undergoes several testing norms and scaling measures. Thus, we can say that we are potent to offer completely tested projects at your service.' /></>}

        </div>
    </div>
  )
}

export default Impact
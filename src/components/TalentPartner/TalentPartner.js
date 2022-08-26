import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './TalentPartner.module.css'
import teimg1 from '../../assets/vector/footer-1.png'
import teimg2 from '../../assets/vector/footer-8.png'
import teimg3 from '../../assets/vector/footer-5.png'
import headerImg from '../../assets/img/te-bg.jpg'
import TalentPartnerCard from './TalentPartnerCard'

const TalenPartner = () => {
  return (
    <>
      <PageHeader heading='Bridging gaps. Building trust.' bgimg={headerImg} />

      <div className={classes.container}>
        <div className={classes.desc}>
            <p>Look no farther if you're seeking for an offshore development partner.You will have complete control over any project we work on as our partner.Every project that our licensed and skilled developers work on is covered by strict non-disclosure agreements.You will always be in control, no matter how remote you are from the action.</p>
        </div>

        <div className={classes.cards}>
        
          <TalentPartnerCard title="Flexibility. Control. Power." content="Our engagement model is an excellent instrument for resource optimization. It provides resource control and flexibility. Therefore, adjust your resource levels accordingly, scaling up when needed and down when not. You now possess the power." cardImage={teimg1} />

          <TalentPartnerCard title="Technology ready. Always." content="Our technological capacity is always growing. We invest a lot of time, money, and effort into formal training and weekly sessions to keep up with new technology. We are more than capable of completing any job to your specifications. Click here to learn more about the technologies we are best at." cardImage={teimg2} />

          <TalentPartnerCard title="Certified. Hands-on. Professionals." content="Our developers stay up to date with the latest technology. They participate in a formal training programme once every three months and a knowledge exchange session every Friday. We typically only work with skilled and accredited developers." cardImage={teimg3} />

        </div>
      </div>
    </>
  )
}

export default TalenPartner
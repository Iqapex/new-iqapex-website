import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './ProdEngg.module.css'
import peimg1 from '../../assets/vector/footer-4.png'
import peimg2 from '../../assets/vector/footer-10.png'
import peimg3 from '../../assets/vector/footer-9.png'
import peimg4 from '../../assets/vector/footer-6.png'
import headerImg from '../../assets/img/pe-bg.jpg'
import SectionCard from './SectionCard'

const ProdEngg = () => {
  return (
    <>
        <PageHeader heading='Build them fast, Test them faster.' bgimg={headerImg} />

        <div className={classes.container}>
            <div className={classes.desc}>
                <p>With the help of our talented team, we innovate, develop, test and deploy Top quality software products that will help in fulfilling all your software and hardware goals. Trusted by 100+ customers and counting, work with us to achieve all your software and hardware goals.</p>
            </div>

            <div className={classes.cards}>

                <SectionCard title="Go to market. In 30 days flat." content="Our team, systems, and processes are all set up to deliver your Minimum Viable Product in just 30 days. Make your vision a reality starting just at USD 4000." cardImage={peimg1} />

                <SectionCard title="Save more. Do more." content="On an average our clients save up to 65%* on total cost working with us. We provide you with an entire team of professionals who will sensitively work on your project at the cost of employing an in-house developer. Expand your resource base. Scale them down. Likewise, just pay only upon delivery. It's as simple as that." cardImage={peimg2} />

                <SectionCard title="One. Stop. Shop." content="We have created more than 120 products over the past few years for platforms that are cloud-enabled, mobile, and web-based. Every new project we work on is built upon the expertise and skills gained by more than 2,000 man hours of design, domain, and technological experience which we have acquired through hard work and extensive research." cardImage={peimg3} />

                <SectionCard title="Confidentiality. Guaranteed." content="We provide you with everything you need for peace of mind, including a local presence in the USA, a strict NDA adherence policy, signed contracts, a guarantee of confidentiality. and much more." cardImage={peimg4} />

            </div>
        </div>
    </>
  )
}

export default ProdEngg
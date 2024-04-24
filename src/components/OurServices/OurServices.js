import React from 'react'
import servicebg from '../../assets/img/service-bg.jpg'
import appdev from '../../assets/vector/appdev-bg.png'
import blockchain from '../../assets/vector/blockchain.png'
import design from '../../assets/vector/design.png'
import marketing from '../../assets/vector/marketing.png'
import webdev from '../../assets/vector/webdev-new.png'
import PageHeader from '../PageHeader/PageHeader'
import OurServiceCard from './OurServiceCard'
import classes from './OurServices.module.css'

const OurServices = () => {
  const webdevArr = ['Progressive Web Apps', 'Full-Stack Web Applications', 'All Cutting-edge Web Technologies', 'Cloud Hosting']
  const appdevArr = ['Native / Hybrid Application', 'Apps Both in IOS / Android']
  const dmArr = ['Search Engine Optimisation', 'Social Media Marketing', 'Content Writing', 'Paid AD Marketing']
  const blockArr = ['Ethereum', 'Hyperledger',]
  const designArr = ['UI / UX Design', 'Photoshop', 'Illustrator', 'Sketch']

  return (
    <>
      <PageHeader className={classes.bgclass} heading='We Serve With Trust' bgimg={servicebg} />
        <div className={classes['service-intro']}>
          <h2>Are you an Enterprise/Startup? Looking for an organization that can help you to innovate with technology to grow your business exponentially?</h2>
          <p style={{color:'white'}}>Well, it's all about the law of attraction. You have just found the organization, you are looking for. Whether you need a software, hardware or both integrated, IQApex Labs just got you covered.</p>
        </div>
        <div className={classes.services}>
          <OurServiceCard title='Web Development' subheading="The #1 Web Development company trusted by 50+ Brands. We help in bringing your vision to life by creating powerful, engaging and stunning websites and web applications for you. Collaborate with us to significantly boost your online presence with Websites that inspire. With the help of our talented Web Dev team Build and Organize platform friendly and highly responsive websites that help you achieve all your goals and aim higher. The sky's the limit!" image={webdev} tools={webdevArr} />

          <OurServiceCard title='App Development' subheading='The #1 App Development company trusted by 100+ Brands. With the help of our talented App Dev team, many brands have fulfilled their dreams of having their own mobile applications available in both Android and iOS with millions of downloads and active users and powerful Web applications curated as per need and capable of handling high traffic. We have fulfilled the requirements of our clients along with keeping the applications user friendly, engaging and visually stunning which have put a smile on the faces of both, our clients and their customers. Join us and make your dreams a reality!' image={appdev} tools={appdevArr} />

          <OurServiceCard title='Digital Marketing' subheading='Although there are many digital marketing organizations on the market, we always have a benefit that comes with all of our services, making us the top pick for everyone. We provide complete digital growth and a powerful online presence for your business. With the help of our deep market research and the use of the best digital technologies we help make your business stand out from the rest of competitors. Our major focus lies in creating organic traffic for you, not the crowd. With the help of our talented marketing team watch as your conversion rates skyrocket! ' image={marketing} tools={dmArr} />

          <OurServiceCard title='Blockchain Development' subheading='With the aid of a top blockchain development company like us, work in decentralized technologies and explore the importance of blockchain, the technology with which the future will be built. Without a doubt, the global adoption of blockchain technology has raised the level of competition in the world. Our blockchain engineers are capable of creating blockchain applications of a high caliber for businesses. In addition, we offer blockchain consulting, make developer tools, and instruct the general public on the same.' image={blockchain} tools={blockArr} />

          <OurServiceCard title='Creative Design' subheading='The designs are where the attractive part of the business profile lies. Thus, the better the design outlay of the company is, the better its prospects are. With the strong expertise and experiences in providing better designs, IQApex Labs can make you the business Centrepoint. The tools that we choose are undoubtedly the best ones and are diversified enough to fulfill all forms of business needs.' image={design} tools={designArr} />
        </div>
           
    </>
  )
}

export default OurServices
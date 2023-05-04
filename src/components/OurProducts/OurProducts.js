import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './OurProducts.module.css'
import k2k from '../../assets/img/k2k.png'
import greenlife from '../../assets/img/greenlife.png'
import iqhost from '../../assets/img/iqhost.png'
import ProductItem from './ProductItem'
// import bgimg from '../../assets/img/iqverse-bg.jpg'
import bgimg from '../../assets/vector/iqverse-bg.png'
import Product from '../../components/Product/Product'

const OurProducts = () => {
  const listArr = ["Creation & hosting, domains, any type of website, servers, email & office services, web security, and online marketing tools.", "Inexpensive shared web hosting (Debian Linux) and domains, cloud storage, VPS, and dedicated services.", "An uptime guarantee of 99.9% per calendar month. Credit of one free day’s hosting for every hour of downtime.", "Manually backup for your account data (including mailboxes) and websites from your control panel."]
  
  return (
    <div className={classes['products-page']}>
      <PageHeader heading='Welcome To IQVerse' bgimg={bgimg} />

      <div className={classes.products}>
        <ProductItem name="K To K Consultants" description="K TO K Consultancy Services is a pro law firm that serves as a single destination for all legal issues for beginners, founders, incubators, angelic investors, venture capitalists, and equity funds representing a variety of sectors / industries including health-tech, ed-tech , fin-tech, FMCG, logistics, e-commerce, travel, mobility, pharma and health care, and real estate etc. with offices in Kolkata, India." imgUrl={k2k} link='https://k2kconsultants.com/' />

        <ProductItem name="GreenLife IQponics" description="This product offers aquaponic/hydroponics/aeroponics training, support and program for individuals, schools and young entrepreneurs.Besides consultancy services this brand enhances aquaponics/hydroponics systems creating the most effective type of aquaponics/ hydroponics/aeroponics for indoors, homes and commercial purposes." imgUrl={greenlife} />

        {/* <ProductItem name="iQHost" description={"The iQHost Product provides the following key potentials: *Creation & hosting, domains, any type of website, servers, email & office services, web security, and online marketing tools. *Inexpensive shared web hosting (Debian Linux) and domains, cloud storage, VPS, and dedicated services. *An uptime guarantee of 99.9% per calendar month. Credit of one free day’s hosting for every hour of downtime. *Manually backup for your account data (including mailboxes) and websites from your control panel."} imgUrl={iqhost} /> */}
        
        <ProductItem name="iQHost" description={"The iQHost Product provides the following key potentials:"} lists={listArr} imgUrl={iqhost} />
      </div>
      <Product /> 

    </div>
  )
}

export default OurProducts
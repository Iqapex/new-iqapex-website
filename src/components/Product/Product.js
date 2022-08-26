import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Product.module.css'
import vimg from '../../assets/vector/home_ventures.png'
import { mouseContext } from '../../context/mouseContext'

const Product = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  return (
    <div className={classes.section}>
      <div className={`section-title ${classes['product-section']}`}>
          <h1 className='section-heading'>Our Ventures</h1>
          <h5 className='section-subheading'>UNIVERSE OF VENTURES UNDER IQAPEX LABS</h5>
      </div>
      <div className={classes.info}>
        <div className={classes.image}>
          <img src={vimg} alt="products" />
        </div>
        <p>Introducing IQverse with a powerful team of talented individuals. Together we Research and Develop new technologies which transform into multiple ventures for the future, backed by IQApex Labs.</p>
        <NavLink to='/iqverse' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Visit IQVerse</NavLink>
      </div>
    </div>
  )
}

export default Product
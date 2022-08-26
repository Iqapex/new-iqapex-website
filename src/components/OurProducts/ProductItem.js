import React, {useContext} from 'react'
import classes from './ProductItem.module.css'
import {BsArrowRight} from 'react-icons/bs'
import { mouseContext } from '../../context/mouseContext'

const ProductItem = ({name, description, lists, imgUrl, link}) => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  return (
    <div className={classes['product-card']}>
        <div className={classes['product-info']}>
            <h1 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{name}</h1>
            <p>{description}</p>
            {lists && <ul className={classes.listitems}>
              {lists.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>}
            <div className={classes.btn} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <a href={link} target='_blank' rel="noreferrer">Know More </a>
                <BsArrowRight/>
            </div>
        </div>
        <div className={classes.image}>
          <img src={imgUrl} alt="iqverse_image-alt" />
        </div>
    </div>
  )
}

export default ProductItem
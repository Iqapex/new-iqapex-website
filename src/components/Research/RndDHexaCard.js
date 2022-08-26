import React, {useContext} from 'react'
import classes from './RndDHexaCard.module.css'
import { mouseContext } from '../../context/mouseContext'

const RndDHexaCard = ({heading, content, Icon}) => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  return (
    <div className={classes.hexagon}>
      <div className={classes.shape}>
        <span onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><Icon className={classes.icon} /></span>
        <div className={classes.info}>
          <h2 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{heading}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default RndDHexaCard
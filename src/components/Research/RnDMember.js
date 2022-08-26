import React, {useContext} from 'react'
import classes from './RnDMember.module.css'
import { mouseContext } from '../../context/mouseContext'

const RnDMember = ({avatar, altImg, name, role}) => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  return (
    <div className={classes.member}>
      <img src={avatar} alt={altImg} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}/>
      <div className={classes['member-info']}>
        <h3 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default RnDMember
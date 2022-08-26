import React, {useState, useEffect, useContext} from 'react'
import { useInView } from 'react-intersection-observer';
import { mouseContext } from '../../context/mouseContext'
import classes from './ImpactCard.module.css'

const ImpactCard = ({progressEndValue, heading, details}) => {

    const [progressStartValue, setProgressStartValue] = useState(0)
    const {mouseEnterHandler, mouseLeaveHandler, className} = useContext(mouseContext)

    useEffect(() => {
    const progress = setInterval(() => {
        if(progressStartValue !== progressEndValue){ 
            setProgressStartValue((prevState) => prevState + 1)
        }
    }, (2500 / progressEndValue))

    return () => {       
        clearInterval(progress)    
    }}, [progressStartValue])

  return (
  <>
    <div className={classes['impact-card']}>
        <div className={`${classes['circular-progress']} ${className}`} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} style={{background: `conic-gradient(var(--secondary-color) ${progressStartValue * 3.6}deg, #525252 0deg)`}}>
            <span className={classes['progress-value']}>{progressStartValue}%</span>
        </div>
        <div className={classes.text}>
            <h2 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className={className}>{heading}</h2>
            <p>{details}</p>
        </div>
    </div>
  </>
  )
}

export default ImpactCard
import React, {useContext} from "react";
import { mouseContext } from '../../context/mouseContext'
import classes from './AboutCard.module.css'

const AboutCard = ({heading, subheading, Icon}) => {
  const {mouseEnterHandler, mouseLeaveHandler, className} = useContext(mouseContext)

  return (
    <>
      <div className={classes.card}>
        <div className={classes.icon}>
          <Icon className={className} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} />
          {/* <img src={Icon} alt="" /> */}
        </div>
        <div className={classes.content}>
          <h1 className={className} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{heading}</h1>
          <p className={classes.text}>{subheading}</p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;

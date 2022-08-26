import React, {useContext} from "react";
import classes from "./OurServiceCard.module.css";
import ToolList from "./ToolList";
import { mouseContext } from '../../context/mouseContext'

const OurServiceCard = ({title, subheading, image, tools}) => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  return (
    <>
      <div className={classes["service-card"]}>
        <div className={classes.info}>
          <h1 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{title}</h1>
          <div className={classes.tools}>
            <p>{subheading}</p>
            <h4>Our Expertise At</h4>
            <ul className={classes.topics} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              {tools.map((tool, i) => (
                  <ToolList key={i} list={tool} />
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.image}>
          <img src={image} alt="service" loading="lazy" />
        </div>
      </div>
      
    </>
  );
};

export default OurServiceCard;

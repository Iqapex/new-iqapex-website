import React from "react";
import about from '../../assets/vector/rnd-about.png'
import classes from "./RnDAbout.module.css";

const RnDAbout = () => {
  return (
    <div className={classes["about-info"]}>
      <div className={classes["about-text"]}>
        <p>
          We are an award-winning research and development company who offer
          workshops, practical training, hackathons, bootcamps, internships,
          masterclasses, tech clubs, and talk shows to diploma, bachelors, and
          masters degree students or working professionals to help them
          transition from being unemployed or underemployed to being
          purposefully happy employees, entrepreneurs, or innovators in the 21st
          century. We have not only helped thousands of students and startups in
          various fields like robotics, automation, IoT device development ,
          software development, web / mobile app development etc but we also
          have a significant contribution towards Research & Development of
          various Research Papers, Books, Publications, Patented Projects and
          many more.
        </p>
      </div>

      <div className={classes["about-img"]}>
        <img src={about} alt="rnd-about-alt" />
      </div>
    </div>
  );
};

export default RnDAbout;

import React from "react";
import FooterLink from "./FooterLink";
import classes from './FooterCard.module.css'

const FooterCard = ({title, links}) => {
  return (
    <div className={classes["footer-card"]}>
      <h3>{title}</h3>
      <div className={classes["footer-info"]}>
        {links.map((link, i) => (
          <FooterLink key={i} link={link[1]} content={link[0]} />
        ))}
      </div>
    </div>
  );
};

export default FooterCard;

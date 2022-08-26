import React from "react";
import classes from "./ToolList.module.css";

const ToolList = ({list}) => {
  return (
    <li className={classes.tool}>
      <div className={classes.circle}></div>
      <p>{list}</p>
    </li>
  );
};

export default ToolList;

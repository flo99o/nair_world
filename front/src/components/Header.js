import React from "react";
import afro from "../assets/afro.jpg";
import braids from "../assets/braids.jpg";
import group from "../assets/group.jpg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.imgHeader}>
      <img src={braids} alt="" />
      <img src={group} alt="" />
      <img src={afro} alt="" />
    </div>
  );
};

export default Header;
// /* Array */
//   ("d7d0cd", "9d755c", "7e5d50", "4a3931", "94807a")
// ][("#d7d0cd", "#9d755c", "#7e5d50", "#4a3931", "#94807a, #c7a394",#e1cec3)];

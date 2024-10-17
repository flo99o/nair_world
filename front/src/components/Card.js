import React from "react";
import styles from "./card.module.css";
import curly from "../assets/curly.jpg"
const Card = ({ name, location, category, files }) => {
  return (
    <div className={styles.minip}>
      <div className={styles.mg}>
        <div className={styles.clr}></div>
        <div className={styles.group}>
          <span>Tokyo</span>
        </div>
      </div>
      <img className={styles.av} src={curly} alt="" />
      <div className={styles.info}>
        <div className={styles.name}>name hair</div>
        <div className={styles.deets}>location</div>
        <div className={styles.deets}>avis</div>
      </div>
      <a className={styles.plot} href="#">More details</a>
    </div>
  );
};

export default Card;

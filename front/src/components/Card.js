import React from "react";
import styles from "./card.module.css";
import curly from "../assets/curly.jpg";
import Heart from "../assets/svg/heart.svg"

 
const Card = ({ name, location, category, price, reviews }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
         <div>
         
         </div>
        <img className={styles.image} src={curly} alt="Haircut" />
        <div className={styles.info}>
          <h2 className={styles.name}>Name du lieu {name}</h2>
          <p className={styles.text}>Location: {location}</p>
          <p className={styles.text}>Prix: {price}€</p>
          <p className={styles.text}>Avis: {reviews}</p>
          <a href="#" className={styles.plot}>More details</a>
        </div>
      </div>
    </div>
  );
};

export default Card;

 //*<h1 className={styles.title}>hair{category}</h1>


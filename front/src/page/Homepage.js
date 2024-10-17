import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <div className="">
      <Header />
      <SearchBar />
      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Homepage;

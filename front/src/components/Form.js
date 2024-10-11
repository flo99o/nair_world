import React from "react";
import styles from "./form.module.css";

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <input type="text" />
      <input type="file" />
      <input type="text" />
      <select>
        <option></option>
        <option></option>
        <option></option>
      </select>
      <input type="button" value="Poster" />
    </div>
  );
};

export default Form;

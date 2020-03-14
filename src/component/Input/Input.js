import React from "react";
import styles from "./Input.module.css";

const Input = ({ password }) => {
  return (
    <div className={styles.generatContainer__form}>
      <label name="newPass">Your New Password:</label>
      <input
        className={styles.generatContainer__input}
        type="text"
        value={password}
        readOnly
      ></input>
    </div>
  );
};

export default Input;

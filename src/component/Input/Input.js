import React from "react";
import styles from "./Input.module.css";

const Input = ({ password }) => {
  return (
    <div className={styles.generatContainer__input}>
      <label name="newPass">Your New Password:</label>
      <input type="text" value={password} readOnly></input>
    </div>
  );
};

export default Input;

import React from "react";
import styles from "./Generator.module.css";

const Generator = ({ submitFn }, props) => {
  return (
    <form className={styles.generatContainer}>
      <div className={styles.generatContainer__input}>
        <label name="length">Password Length:</label>
        <input type="range" min="6" max="32" name="length"></input>
      </div>
      <div className={styles.generatContainer__input}>
        <label name="symbols">Include Symbols:</label>
        <input type="checkbox" name="symbols"></input>
        <label name="symbols"> ( e.g. @#$% ) </label>
      </div>
      <div className={styles.generatContainer__input}>
        <label name="numbers">Include Numbers:</label>
        <input type="checkbox" name="numbers"></input>
        <label name="numbers"> ( e.g. 123456 ) </label>
      </div>
      <div className={styles.generatContainer__input}>
        <label name="lowercaseChar">Include Lowercase Characters:</label>
        <input type="checkbox" name="lowercaseChar"></input>
        <label name="lowercaseChar"> ( e.g. abcdefgh ) </label>
      </div>
      <div className={styles.generatContainer__input}>
        <label name="uppercaseChar">Include Uppercase Characters:</label>
        <input type="checkbox" name="uppercaseChar"></input>
        <label name="uppercaseChar"> ( e.g. ABCDEFGH ) </label>
      </div>
      <button className={styles.generatContainer__button} onClick={submitFn}>
        Generate Password
      </button>
      <div className={styles.generatContainer__input}>
        <label name="newPass">Your New Password:</label>
        <input type="text" placeholder={props.password}></input>
      </div>
    </form>
  );
};

export default Generator;

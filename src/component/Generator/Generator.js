import React from "react";
import styles from "./Generator.module.css";

const Generator = ({ submitFn, rangeFn, checkBoxFn, ...props }) => {
  return (
    <form className={styles.generatContainer}>
      <div className={styles.generatContainer__input}>
        <label name="length">Password Length:</label>
        <input
          type="range"
          min="5"
          max="33"
          onChange={rangeFn}
          name="length"
        ></input>
      </div>
      <div className={styles.generatContainer__input}>
        <label name="Symbols">Include Symbols:</label>
        <input
          type="checkbox"
          name="Symbols"
          checked={props.checked}
          onChange={checkBoxFn}
        ></input>
        <label name="Symbols"> ( e.g. @#$% ) </label>
      </div>
      <div className={styles.generatContainer__input}>
        <label name="Numbers">Include Numbers:</label>
        <input
          type="checkbox"
          name="Numbers"
          checked={props.checked}
          onChange={checkBoxFn}
        ></input>
        <label name="Numbers"> ( e.g. 123456 ) </label>
      </div>
      <div className={styles.generatContainer__input}>
        <label name="Lower">Include Lowercase Characters:</label>
        <input
          type="checkbox"
          name="Lower"
          checked={props.checked}
          onChange={checkBoxFn}
        ></input>
        <label name="Lower"> ( e.g. abcdefgh ) </label>
      </div>
      <div className={styles.generatContainer__input}>
        <label name="Upper">Include Uppercase Characters:</label>
        <input
          type="checkbox"
          name="Upper"
          checked={props.checked}
          onChange={checkBoxFn}
        ></input>
        <label name="Upper"> ( e.g. ABCDEFGH ) </label>
      </div>
      <button className={styles.generatContainer__button} onClick={submitFn}>
        Generate Password
      </button>
      <div className={styles.generatContainer__input}>
        <label name="newPass">Your New Password:</label>
        <input type="text" value={props.password} readOnly></input>
      </div>
    </form>
  );
};

export default Generator;

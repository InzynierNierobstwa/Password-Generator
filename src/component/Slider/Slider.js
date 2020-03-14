import React from "react";
import styles from "./Slider.module.css";

const Slider = ({ rangeFn }) => {
  return (
    <div className={styles.generatContainer__form}>
      <label name="length">Password Length:</label>
      <input
        className={styles.generatContainer__input}
        type="range"
        min="5"
        max="16"
        onChange={rangeFn}
        name="length"
      ></input>
    </div>
  );
};

export default Slider;

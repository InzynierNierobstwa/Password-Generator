import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, example, isSelected, onCheckboxChange }) => (
  <div className={styles.checkbox}>
    <label>
      <input
        className={styles.checkbox__input}
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
      />
      {label}
      {example}
    </label>
  </div>
);

export default Checkbox;

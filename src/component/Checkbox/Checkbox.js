import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className={styles.checkbox}>
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className={styles.checkbox__input}
      />
      {label}
    </label>
  </div>
);

export default Checkbox;

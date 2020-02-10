import React from "react";
import styles from "./Header.module.css";

const Header = props => {
  return (
    <header className={styles.headerContainer}>
      <img
        className={styles.headerContainer__img}
        alt={props.name}
        src={
          "https://images.freeimages.com/images/premium/large-thumbs/3628/36288690-lock-smiling.jpg"
        }
      ></img>
      <p className={styles.headerContainer__text}>
        Security Password Generator
      </p>
    </header>
  );
};

export default Header;

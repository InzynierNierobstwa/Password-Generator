import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerContainer__text}>
        Designed by Inzynier Nierobstwa
      </p>
      <div className={styles.footerContainer__linkContainer}>
        <a
          className={styles.footerContainer__link}
          href="https://www.linkedin.com/in/kamila-lisztwan-688886106"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className={styles.footerContainer__link}
          href="https://github.com/InzynierNierobstwa"
        >
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

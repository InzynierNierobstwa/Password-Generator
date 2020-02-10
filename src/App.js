import React from "react";
import styles from "./App.module.css";
import Header from "./component/Header/Header";
import Generator from "./component/Generator/Generator";
import Footer from "./component/Footer/Footer";

const generatePassword = () => {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retPass = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retPass += charset.charAt(Math.floor(Math.random() * n));
  }
  return retPass;
};

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header name="lock" />
        <Generator />
        <Footer />
      </div>
    );
  }
}

export default App;

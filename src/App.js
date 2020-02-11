import React from "react";
import styles from "./App.module.css";
import Header from "./component/Header/Header";
import Generator from "./component/Generator/Generator";
import Footer from "./component/Footer/Footer";

class App extends React.Component {
  state = {
    passwordValue: "start",
    rangeValue: 6
  };

  generatePassword = event => {
    event.preventDefault();
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retPass = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retPass += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(retPass);
    this.setState({ passwordValue: retPass });
    return retPass;
  };

  render() {
    return (
      <div className={styles.container}>
        <Header name="lock" />
        <Generator submitFn={this.generatePassword} />
        <Footer />
      </div>
    );
  }
}

export default App;

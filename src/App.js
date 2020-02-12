import React from "react";
import styles from "./App.module.css";
import Header from "./component/Header/Header";
import Generator from "./component/Generator/Generator";
import Footer from "./component/Footer/Footer";

class App extends React.Component {
  state = {
    passwordValue: "Your new password",
    rangeValue: 16,
    isChecked: true
  };

  generatePassword = event => {
    event.preventDefault();

    const charsetArray = [
      "abcdefghijklmnopqrstuvwxyz",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "0123456789",
      "~!@#$%^&*(){}<>,.?|"
    ];

    let length = this.state.rangeValue,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retPass = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retPass += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(retPass);
    this.setState({ passwordValue: retPass });
    return retPass;
  };

  getRange = event => {
    event.preventDefault();
    this.setState({ rangeValue: event.target.value });
    console.log(this.state.rangeValue);
  };

  /* here I am - working on checkbox */
  toggleChange = event => {
    console.log(event.target.name);
    this.setState({ isChecked: !this.state.isChecked });
    console.log(this.state.isChecked);
  };

  render() {
    return (
      <div className={styles.container}>
        <Header name="lock" />
        <Generator
          submitFn={this.generatePassword}
          rangeFn={this.getRange}
          password={this.state.passwordValue}
          range={this.state.rangeValue}
          checked={this.state.isChecked}
          checkBoxFn={this.toggleChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

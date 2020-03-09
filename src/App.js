import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Checkbox from "./component/Checkbox/Checkbox";
import Slider from "./component/Slider/Slider";
import Input from "./component/Input/Input";
import styles from "./App.module.css";

const CheckboxOptions = ["symbols", "numbers", "lowercase", "uppercase"];

class App extends React.Component {
  state = {
    checkboxes: CheckboxOptions.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    rangeValue: 16,
    passwordValue: "Your new password"
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  getRange = event => {
    event.preventDefault();
    this.setState({ rangeValue: event.target.value });
    console.log(this.state.rangeValue);
  };

  generatePassword = event => {
    event.preventDefault();

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

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => CheckboxOptions.map(this.createCheckbox);

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Slider rangeFn={this.getRange} />
        <form onSubmit={this.handleFormSubmit}>
          {this.createCheckboxes()}
          <Input password={this.state.passwordValue} />
          <button type="submit" className={styles.button}>
            Save
          </button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default App;

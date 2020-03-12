import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Checkbox from "./component/Checkbox/Checkbox";
import Slider from "./component/Slider/Slider";
import Input from "./component/Input/Input";
import styles from "./App.module.css";

const CheckboxOptions = ["numbers", "uppercase", "symbols"];

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

  generatePasswordTwo = event => {
    event.preventDefault();

    let passLength = this.state.rangeValue;
    const string = "abcdefghijklmnopqrstuvwxyz";
    const numeric = "0123456789";
    const punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    let character = "";

    let checkboxArray = [];
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        checkboxArray.push(checkbox);
      });
    console.log(checkboxArray);

    while (password.length < passLength) {
      const entity1 = Math.ceil(string.length * Math.random() * Math.random());
      const entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
      const entity3 = Math.ceil(
        punctuation.length * Math.random() * Math.random()
      );

      character = character + string.charAt(entity1);

      if (checkboxArray.includes("numbers")) {
        console.log("numbers");
        character = character + numeric.charAt(entity2);
        console.log(character);
      }
      if (checkboxArray.includes("uppercase")) {
        console.log("uppercase");
        let hold = string.charAt(entity1);
        hold = password.length % 2 === 0 ? hold.toUpperCase() : hold;
        character = character + hold;
        console.log(character);
      }
      if (checkboxArray.includes("symbols")) {
        console.log("symbols");
        character = character + punctuation.charAt(entity3);
      }
      password = character;
    }

    password = password
      .split("")
      .sort(function() {
        return 0.5 - Math.random();
      })
      .join("");
    let finishPass = password.substr(0, passLength);
    this.setState({ passwordValue: finishPass });
    return finishPass;
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
        <form
          onSubmit={event => {
            this.handleFormSubmit(event);
            this.generatePasswordTwo(event);
          }}
        >
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

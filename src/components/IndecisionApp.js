import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {

  // Use the class syntax see babel-plugin-transform-class-properties.
  state = {
    options: [],
    selectedOption: undefined
  };

  /* Custom methods */
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    // Get a random number between 0 and the length of the options array.
    const randomNum = Math.floor(Math.random() * this.state.options.length);

    // Get one of the options at random.
    const option = this.state.options[randomNum];

    // Bring up the Modal.
    this.setState(() => ({ selectedOption: option }));
  };

  handleClearSelectedOption = () => {
    // Close the Modal.
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add option';
    }
    else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    else {
      // Use concat to merge two arrays. .push does not work.
      this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
  };

  /* React component lifecycle methods */
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing if the json data is invalid.
    }
  }

  // React component lifecycle method.
  // Check what change was make i.e. do something only if an option is added.
  componentDidUpdate(prevProps, prevState) {
    // Save options to local storage.
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  // React component lifecycle method.
  componentWillUnmount() {
    // Fires when a component is unmounted such as going to another page.
  }

  /* React component render */
  render() {
    const subtitle = 'Put your life in the hands of a computer...';

    // Return all the react components. Pass in required data and functions.
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              // Sending new props down will trigger a re-render of the component.
              options={this.state.options}
              // Reverse the data flow up via options.
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
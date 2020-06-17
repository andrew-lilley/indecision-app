import React from "react";

/**
 * Add Option functionality.
 * 
 * As the state is required, use a react component.
 */
export default class AddOption extends React.Component {
  // This state is only required within this method so we add it here.
  state = {
    error: undefined
  };

  // Arrow functions don't bind their own this value.
  handleAddOption = (e) => {
    // Prevent default submission.
    e.preventDefault();

    // Get entered value.
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    //error: error (If the variable  name matches the key value, you do not need a key value pair)
    this.setState(() => ({ error }));

    if (!error) {
      // Remove input data after submission.
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
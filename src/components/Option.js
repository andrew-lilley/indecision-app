import React from "react";

// Call inline function so that the text can be sent back.
const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button className="button--link" onClick={(e) => {
      props.handleDeleteOption(props.optionText);
    }}
    >
      remove
    </button>
  </div>
);

export default Option;
import React from "react";

// Use stateless functional component as state is not required.
const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

// This must be declared after the component.
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
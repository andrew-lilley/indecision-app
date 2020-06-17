import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp"

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Add indecision app to the app div.
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.add = exports.square = void 0;
console.log('utils.js is running');

var square = function square(x) {
  return x * x;
};

exports.square = square;

var add = function add(a, b) {
  return a + b;
};

exports.add = add;

var subtract = function subtract(a, b) {
  return a - b;
};

var _default = subtract;
exports["default"] = _default;
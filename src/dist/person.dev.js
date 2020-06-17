"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.canDrink = exports.isAdult = void 0;

var isAdult = function isAdult(age) {
  return age >= 18;
};

exports.isAdult = isAdult;

var canDrink = function canDrink(age) {
  return age >= 21;
};

exports.canDrink = canDrink;

var isSenior = function isSenior(age) {
  return age >= 65;
};

var _default = isSenior;
exports["default"] = _default;
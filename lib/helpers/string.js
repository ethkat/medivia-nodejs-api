'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var camelize = exports.camelize = function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
};

var getDataFromDivString = exports.getDataFromDivString = function getDataFromDivString() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      string = _ref.string;

  var indexOf2Points = string.indexOf(':');
  return {
    key: camelize(string.substr(0, indexOf2Points)),
    value: string.substr(indexOf2Points + 1, string.length)
  };
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestUrl = undefined;

var _tinyreq = require('tinyreq');

var _tinyreq2 = _interopRequireDefault(_tinyreq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestUrl = exports.requestUrl = function requestUrl(url, parser) {
  return new Promise(function (resolve, reject) {
    (0, _tinyreq2.default)(url, function (error, body) {
      if (error) reject(error);
      resolve(parser(body));
    });
  });
};
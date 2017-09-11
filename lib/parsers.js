'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOnlinePlayersByWorld = getOnlinePlayersByWorld;

var _scrapper = require('./scrapper');

var _utils = require('./utils');

var _parserUtils = require('./parser-utils');

function getOnlinePlayersByWorld() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      worldName = _ref.worldName;

  return new Promise(function (resolve, reject) {
    (0, _scrapper.requestUrl)((0, _utils.createOnlineURL)({ worldName: worldName }), _parserUtils.readOnlineBody).then(function (result) {
      resolve(result);
    }).catch(function (error) {
      return reject(error);
    });
  });
}
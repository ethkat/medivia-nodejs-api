'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOnlinePlayersByWorld = getOnlinePlayersByWorld;
exports.getCharacterInformation = getCharacterInformation;
exports.getCharacterDeathInformation = getCharacterDeathInformation;
exports.getGuildInformation = getGuildInformation;

var _utils = require('./utils');

var _parserUtils = require('./parser-utils');

function getOnlinePlayersByWorld() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      worldName = _ref.worldName;

  return new Promise(function (resolve, reject) {
    (0, _utils.requestUrl)((0, _utils.createOnlineURL)({ worldName: worldName }), _parserUtils.readOnlineBody).then(function (result) {
      resolve(result);
    }).catch(function (error) {
      return reject(error);
    });
  });
}

function getCharacterInformation() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      characterName = _ref2.characterName;

  return new Promise(function (resolve, reject) {
    (0, _utils.requestUrl)((0, _utils.createCharacterPage)({ characterName: characterName }), _parserUtils.readCharacterBody).then(function (result) {
      resolve(result);
    }).catch(function (error) {
      return reject(error);
    });
  });
}

function getCharacterDeathInformation() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      characterName = _ref3.characterName;

  return new Promise(function (resolve, reject) {
    (0, _utils.requestUrl)((0, _utils.createCharacterPage)({ characterName: characterName }), _parserUtils.readCharacterDeathsBody).then(function (result) {
      resolve(result);
    }).catch(function (error) {
      return reject(error);
    });
  });
}

function getGuildInformation() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      guildUrl = _ref4.guildUrl;

  return new Promise(function (resolve, reject) {
    (0, _utils.requestUrl)(guildUrl, _parserUtils.readGuildInformationBody).then(function (result) {
      resolve(result);
    }).catch(function (error) {
      return reject(error);
    });
  });
}
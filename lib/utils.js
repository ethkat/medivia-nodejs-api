'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestUrl = exports.createCharacterPage = exports.createOnlineURL = undefined;

var _tinyreq = require('tinyreq');

var _tinyreq2 = _interopRequireDefault(_tinyreq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createOnlineURL = exports.createOnlineURL = function createOnlineURL() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      worldName = _ref.worldName;

  return 'https://medivia.online/community/online/' + worldName;
};

var createCharacterPage = exports.createCharacterPage = function createCharacterPage() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      characterName = _ref2.characterName;

  return 'https://medivia.online/community/character/' + characterName;
};

var requestUrl = exports.requestUrl = function requestUrl(url, parser) {
  return new Promise(function (resolve, reject) {
    (0, _tinyreq2.default)(url, function (error, body) {
      if (error) reject(error);
      resolve(parser(body));
    });
  });
};
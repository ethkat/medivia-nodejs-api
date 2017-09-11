'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var _scrappers = require('./scrappers');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediviaAPI = function () {
  function MediviaAPI(props) {
    _classCallCheck(this, MediviaAPI);

    var worldName = props && props.worldName;
    if (!worldName) {
      console.warn('No Game word passed');
      return;
    } else {
      var itsNotAValidWorldName = _constants.MEDIVIA_WORLD_NAMES.indexOf(worldName) > -1;
      if (itsNotAValidWorldName) {
        console.warn('Sorry but ' + worldName + ' its not a valid Medivia.org worldname');
        return;
      }
      this.worldName = worldName;
    }
  }

  _createClass(MediviaAPI, [{
    key: 'getOnlinePlayers',
    value: function getOnlinePlayers() {
      var worldName = this.worldName;

      return new Promise(function (resolve, reject) {
        (0, _scrappers.getOnlinePlayersByWorld)({ worldName: worldName }).then(function (result) {
          return resolve(result);
        }).catch(function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: 'getCharacterInformation',
    value: function getCharacterInformation(_ref) {
      var characterName = _ref.characterName;

      if (!characterName) {
        console.warn('Charactername is needed');
        return;
      };
      return new Promise(function (resolve, reject) {
        (0, _scrappers.getCharacterInformation)({ characterName: characterName }).then(function (result) {
          return resolve(result);
        }).catch(function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: 'getCharacterDeathInformation',
    value: function getCharacterDeathInformation(_ref2) {
      var characterName = _ref2.characterName;

      if (!characterName) {
        console.warn('Charactername is needed');
        return;
      };
      return new Promise(function (resolve, reject) {
        (0, _scrappers.getCharacterDeathInformation)({ characterName: characterName }).then(function (result) {
          return resolve(result);
        }).catch(function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: 'getGuildInformation',
    value: function getGuildInformation(_ref3) {
      var guildUrl = _ref3.guildUrl;

      if (!guildUrl) {
        console.warn('Guild Name or url is needed');
        return;
      };
      return new Promise(function (resolve, reject) {
        (0, _scrappers.getGuildInformation)({ guildUrl: guildUrl }).then(function (result) {
          return resolve(result);
        }).catch(function (error) {
          return reject(error);
        });
      });
    }
  }]);

  return MediviaAPI;
}();

new MediviaAPI({ worldName: 'Destiny ' }).getGuildInformation({
  guildUrl: 'https://medivia.online/community/guilds/show/5847'
}).then(function (result) {
  console.log(result);
}).catch(function (error) {
  console.log(error);
});

exports.default = MediviaAPI;
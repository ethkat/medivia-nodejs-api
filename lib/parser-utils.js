'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readGuildInformationBody = exports.readCharacterDeathsBody = exports.readCharacterBody = exports.readOnlineBody = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _string = require('./helpers/string');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapCharacterData = function mapCharacterData($) {
  return function (i, div) {
    var string = $(div).text();
    var normalizedText = (0, _string.getDataFromDivString)({ string: string });
    var key = normalizedText.key,
        value = normalizedText.value;

    return _defineProperty({}, key, value);
  };
};

var mapUsersData = function mapUsersData($) {
  return function (i, li) {
    var userInfo = [];
    // To dont get the headers titles
    if (i === 0) return;

    $(li).find('div').each(function (index, div) {
      userInfo.push($(div).text());
    });

    return {
      lastLogin: userInfo[0],
      name: userInfo[1],
      vocation: userInfo[2],
      level: userInfo[3]
    };
  };
};

var readDeathList = function readDeathList($) {
  return function (index, div) {
    var deathData = [];
    $(div).find('div').each(function (index, div) {
      deathData.push($(div).text());
    });
    return {
      timeago: deathData[0],
      killedBy: deathData[1]
    };
  };
};

var getGuildMembers = function getGuildMembers($) {
  return function (index, a) {
    console.log($(a).text());
    return $(a).text();
  };
};

var readOnlineBody = exports.readOnlineBody = function readOnlineBody(body) {
  var $ = _cheerio2.default.load(body);
  return $($('ul')[1]).find('li').map(mapUsersData($)).get();
};

var readCharacterBody = exports.readCharacterBody = function readCharacterBody(body) {
  var $ = _cheerio2.default.load(body);
  return $('.med-character').find('.med-width-50.med-white-space-normal').find('.med-width-100.med-mt-10').map(mapCharacterData($)).get().reduce(function (result, data) {
    for (var key in data) {
      result[key] = data[key];
    }return result;
  }, {});
};

var readCharacterDeathsBody = exports.readCharacterDeathsBody = function readCharacterDeathsBody(body) {
  var $ = _cheerio2.default.load(body);
  return $($('.med-show-more')[0]).find('.black-link').map(readDeathList($)).get().reduce(function (result, data) {
    for (var key in data) {
      result[key] = data[key];
    }return result;
  }, {});
};

var readGuildInformationBody = exports.readGuildInformationBody = function readGuildInformationBody(body) {
  var $ = _cheerio2.default.load(body);
  var guildDivData = $('.med-guild').find('div').find('a');
  var members = guildDivData.map(getGuildMembers($)).get();
  return {
    members: members
  };
};
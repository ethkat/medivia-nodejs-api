import _ from 'lodash';
import cheerio from 'cheerio';

import { getDataFromDivString } from './helpers/string';

const mapCharacterData = ($) => {
  return (i, div) => {
    const string = $(div).text();
    const normalizedText = getDataFromDivString({ string });
    const { key, value } = normalizedText;
    return {
      [key]: value
    }
  }
}

const mapUsersData = ($) => {
  return (i, li) => {
    const userInfo = [];
    // To dont get the headers titles
    if (i === 0) return;

    $(li).find('div').each((index, div) => {
      userInfo.push($(div).text());
    });

    return {
      lastLogin: userInfo[0],
      name: userInfo[1],
      vocation: userInfo[2],
      level: userInfo[3]
    };
  }
};

const readDeathList = ($) => {
  return (index, div) => {
    const deathData = [];
    $(div).find('div').each((index, div) => {
      deathData.push($(div).text());
    });
    return {
      timeago: deathData[0],
      killedBy: deathData[1],
    };
  }
};

const getGuildMembers = ($) => (index, a) => $(a).text();

export const readOnlineBody = body => {
  const $ = cheerio.load(body);
  return $(
    $('ul')[1])
    .find('li')
    .map(mapUsersData($)
  ).get()
};

export const readCharacterBody = body => {
  const $ = cheerio.load(body);
  return $('.med-character')
    .find('.med-width-50.med-white-space-normal')
    .find('.med-width-100.med-mt-10')
    .map(mapCharacterData($))
    .get()
    .reduce((result, data) => {
      for (const key in data) result[key] = data[key];
      return result;
    }, {});
};

export const readCharacterDeathsBody = body => {
  const $ = cheerio.load(body);
  return $($('.med-show-more')[0])
    .find('.black-link')
    .map(readDeathList($))
    .get()
    .reduce((result, data) => {
      for (const key in data) result[key] = data[key];
      return result;
    }, {});
}

export const readGuildInformationBody = body => {
  const $ = cheerio.load(body);
  const guildDivData = $('.med-guild').find('div').find('a')
  const members = guildDivData.map(getGuildMembers($)).get();
  return {
    members,
  }
}

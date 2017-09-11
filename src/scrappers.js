import {
  requestUrl,
  createOnlineURL,
  createCharacterPage,
} from './utils';
import {
  readOnlineBody,
  readCharacterBody,
  readCharacterDeathsBody,
  readGuildInformationBody,
} from './parser-utils';

export function getOnlinePlayersByWorld({ worldName } = {}) {
  return new Promise((resolve, reject) => {
    requestUrl(createOnlineURL({ worldName }), readOnlineBody).then((result) => {
      resolve(result);
    }).catch((error) => reject(error))
  })
}

export function getCharacterInformation({ characterName } = {}) {
  return new Promise((resolve, reject) => {
    requestUrl(createCharacterPage({ characterName }), readCharacterBody).then((result) => {
      resolve(result);
    }).catch((error) => reject(error))
  })
}

export function getCharacterDeathInformation({ characterName } = {}) {
  return new Promise((resolve, reject) => {
    requestUrl(createCharacterPage({ characterName }), readCharacterDeathsBody).then((result) => {
      resolve(result);
    }).catch((error) => reject(error))
  })
}

export function getGuildInformation({ guildUrl } = {}) {
  return new Promise((resolve, reject) => {
    requestUrl(guildUrl, readGuildInformationBody).then((result) => {
      resolve(result);
    }).catch((error) => reject(error))
  })
}

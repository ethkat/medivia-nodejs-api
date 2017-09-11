import tinyreq from 'tinyreq';

export const createOnlineURL = ({ worldName } = {}) => (
  `https://medivia.online/community/online/${worldName}`
);

export const createCharacterPage = ({ characterName } = {}) => (
  `https://medivia.online/community/character/${characterName}`
);

export const requestUrl = (url, parser) => (
  new Promise((resolve, reject) => {
    tinyreq(url, (error, body) => {
      if (error) reject(error);
      resolve(parser(body));
    })
  })
);

import { MEDIVIA_WORLD_NAMES } from './constants';
import {
  getGuildInformation,
  getOnlinePlayersByWorld,
  getCharacterInformation,
  getCharacterDeathInformation,
} from './scrappers';

class MediviaAPI {
  constructor(props) {
    const worldName = props && props.worldName;
    if (!worldName) {
      console.warn('No Game word passed');
      return;
    } else {
      const itsNotAValidWorldName = MEDIVIA_WORLD_NAMES.indexOf(worldName) > -1;
      if (!itsNotAValidWorldName) {
        console.warn(`Sorry but ${worldName} its not a valid Medivia.org worldname`);
        return;
      } else {
        this.worldName = worldName;
      }
    }
  }

  getOnlinePlayers() {
    const { worldName } = this;
    return new Promise((resolve, reject) => {
      getOnlinePlayersByWorld({ worldName })
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  }

  getCharacterInformation({ characterName }) {
    if (!characterName) {
      console.warn('Charactername is needed');
      return;
    };
    return new Promise((resolve, reject) => {
      getCharacterInformation({ characterName })
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  }

  getCharacterDeathInformation({ characterName }) {
    if (!characterName) {
      console.warn('Charactername is needed');
      return;
    };
    return new Promise((resolve, reject) => {
      getCharacterDeathInformation({ characterName })
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  }

  getGuildInformation({ guildUrl }) {
    if (!guildUrl) {
      console.warn('Guild Name or url is needed');
      return;
    };
    return new Promise((resolve, reject) => {
      getGuildInformation({ guildUrl })
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    })
  }
}

export default MediviaAPI;

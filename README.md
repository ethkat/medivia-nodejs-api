## Medivia.org NodeJS Promise bassed API.

Easy to use [Medivia](https://medivia.online/) API.

### Get started

`npm install medivia-api;`

### How to use it.

```
import MediviaAPI from 'medivia-api';

const mediviaAPI = new MediviaAPI({ worldName: 'Destiny' });

mediviaAPI.getOnlinePlayers().then((result) => {
  console.log(result); // Array bassed online players to Destiny
}).catch((error) => {
  console.log(error);
})
```
### Methods.

`getOnlinePlayers()` - Method to get all the online players `worldName` is optional, but be sure to pass a `worldName` when you initialize the function.

**Example response**
```
 {
   { name, level, vocation, lastLogin, },
   ...more,
 }
```
`getCharacterInformation({ characterName: 'Ethan pump' })` - Method to get the whole character information

**Example response**
```
{
  'name:': 'Ethan pump ',
  'sex:': 'male',
  'vocation:': 'Royal Paladin',
  ...
}
```

`getCharacterDeathInformation({ characterName: 'Ethan pump' })` - Method to get the whole character death information by a giving name

**Example response**
```
[
  { timeago: '1 minute', killedBy: 'Ethan pump' },
  ...deaths
]
```

`getGuildInformation({ guildUrl: 'https://medivia.online/community/guilds/show/5847'  })` - Method to get the guild information by a giving guild URL or guild name.

**Example response**
```
{
  members: [{
      name: 'Wingzter',
    }, ...more]
}
```

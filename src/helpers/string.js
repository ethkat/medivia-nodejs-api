export const camelize = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
};

export const getDataFromDivString = ({ string } = {}) => {
  const indexOf2Points = string.indexOf(':');
  return {
    key: camelize(string.substr(0, indexOf2Points)),
    value: string.substr(indexOf2Points + 1, string.length)
  }
};

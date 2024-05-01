export default function cleanSet(set, startString) {
  const cleanArray = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((item) => {
    try {
      if (item.startsWith(startString)) {
        cleanArray.push(item.substring(startString.length));
      }
    } catch (e) {
    /* tslint:disable:no-empty */
    }
  });
  return cleanArray.join('-');
}

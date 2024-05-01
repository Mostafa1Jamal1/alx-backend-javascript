export default function cleanSet(set, startString) {
  const cleanArray = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((item) => {
    if (item && item.startsWith(startString)) {
      cleanArray.push(item.substring(startString.length));
    }
  });
  return cleanArray.join('-');
}

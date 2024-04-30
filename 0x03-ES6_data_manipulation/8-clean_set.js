export default function cleanSet(set, startString) {
  const cleanArray = [];
  if (startString === '') {
    return '';
  }
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      cleanArray.push(item.substring(startString.length));
    }
  });
  return cleanArray.join('-');
}

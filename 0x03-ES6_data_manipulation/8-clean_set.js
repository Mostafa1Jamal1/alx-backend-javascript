export default function cleanSet(set, startString) {
  const cleanArray = [];
  if (startString === '') {
    return '';
  }
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      cleanArray.push(item.slice(startString.length - item.length));
    }
  });
  return cleanArray.join('-');
}

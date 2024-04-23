export default function iterateThroughObject(reportWithIterator) {
  let employessString = '';
  for (const employee of reportWithIterator) {
    if (reportWithIterator.indexOf(employee) > 0) {
      employessString += ' | ';
    }
    employessString += employee;
  }
  return employessString;
}

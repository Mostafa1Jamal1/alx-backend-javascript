export default function createIteratorObject(report) {
  const employees = [];
  for (const department in report.allEmployees) {
    if (Object.hasOwn(report.allEmployees, department)) {
      for (const employee of report.allEmployees[department]) {
        employees.push(employee);
      }
    }
  }
  return employees;
}

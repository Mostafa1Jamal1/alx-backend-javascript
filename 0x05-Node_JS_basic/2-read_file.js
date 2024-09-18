const fs = require('node:fs');
const path = require('node:path');

function countStudents(localPath) {
  const fullPath = path.resolve(localPath);
  try {
    const data = fs.readFileSync(fullPath, 'utf-8');
    const lines = data.split('\n');
    const students = lines.filter((line) => line.trim() !== '');
    students.shift();
    console.log(`Number of students: ${students.length}`);
    const studentsList = new Map();
    for (const student of students) {
      const [firstName, , , field] = student.split(',');
      if (!studentsList.has(field)) {
        studentsList.set(field, [firstName]);
      } else {
        studentsList.get(field).push(firstName);
        studentsList.set(field, studentsList.get(field));
      }
    }
    for (const [key, value] of studentsList) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

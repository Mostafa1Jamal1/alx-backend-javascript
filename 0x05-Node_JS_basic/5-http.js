const http = require('http');
const fs = require('fs');
const path = require('path');

async function countStudents(localPath) {
  const fullPath = path.resolve(localPath);
  let output = '';
  try {
    const data = await fs.promises.readFile(fullPath, 'utf8');
    const lines = data.split('\n');
    const students = lines.filter((line) => line.trim() !== '');
    students.shift();
    output += `Number of students: ${students.length}\n`;
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
      output += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
    }
    output = output.trimEnd();
    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const filePath = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.write('This is the list of our students\n');
      countStudents(filePath)
        .then((data) => {
          res.end(data);
        })
        .catch(() => {
          res.statusCode = 404;
          res.end('Cannot load the database');
        });
      break;
    default:
      res.end('Hello Holberton School!');
      break;
  }
});

app.listen(1245);

module.exports = app;

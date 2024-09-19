import fs from 'fs';
export default function readDatabase (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        const students = lines.filter((line) => line.trim() !== '');
        students.shift();
        const studentsList = {};
        for (const student of students) {
          const [firstName, , , field] = student.split(',');
          if (!studentsList[field]) {
            studentsList[field] = [firstName];
          } else {
            studentsList[field].push(firstName);
          }
        }

        resolve(studentsList);
      }
    });
  });
}

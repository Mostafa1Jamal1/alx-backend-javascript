import readDatabase from '../utils.js';
export default class StudentsController {
  static getAllStudents (request, response) {
    readDatabase('dataase.csv')
      .then((data) => {
        response.send(data);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor (request, response) {
    const major = request.params.major;
    readDatabase('dataase.csv')
      .then((data) => {
        response.send(data[major]);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

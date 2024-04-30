export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((oldStudent) => {
      const student = oldStudent;
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);

      if (newGrade === undefined) {
        student.grade = 'N/A';
      } else {
        student.grade = newGrade.grade;
      }
      return student;
    });
}

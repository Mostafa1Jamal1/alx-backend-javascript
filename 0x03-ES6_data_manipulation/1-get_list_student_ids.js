export default function getListStudentIds(studentsList) {
  const ids = [];
  if (studentsList instanceof Array) {
    studentsList.map((student) => ids.push(student.id));
  }
  return ids;
}

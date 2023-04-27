export default function getStudentIdsSum(students) {
  return students.reduce((prev, c) => prev + c.id, 0);
}

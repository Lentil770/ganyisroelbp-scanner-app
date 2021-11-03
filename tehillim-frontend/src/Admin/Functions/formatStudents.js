import { months } from "../../misc";

function formatStudentsForTable(students) {
  console.log("formatsrudentsortabel");

  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < months.length; j++) {
      if (students[i][months[j]] === 1) {
        students[i][months[j]] = "yes";
      }
    }
  }
  return students;
}

export { formatStudentsForTable };

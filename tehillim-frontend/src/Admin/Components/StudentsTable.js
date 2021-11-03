import { months } from "../../misc";
import { formatStudentsForTable } from "../Functions/formatStudents";

export default function StudentsTable(props) {
  const formattedStudents = formatStudentsForTable(props.currentStudents);

  const studentRows = formattedStudents.map((student) => (
    <tr style={{ border: "1px solid black" }} key={student._id}>
      <td>{student.studentID}</td>
      {months.map((month) => (
        <td key={month}>{student[month]}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <tr>
        {months.map((month) => (
          <th key={month}>{month}</th>
        ))}
      </tr>

      {studentRows}
    </table>
  );
}

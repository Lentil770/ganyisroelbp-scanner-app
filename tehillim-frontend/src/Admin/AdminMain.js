import axios from "axios";
import { useEffect, useState } from "react";
import { BASEURL } from "../misc";
import StudentsTable from "./Components/StudentsTable";

export default function AdminMain() {
  const [currentStudents, setCurrentStudents] = useState();

  useEffect(() => {
    console.log("useEffect");
    axios
      .get(BASEURL + "/scan")
      .then((response) => {
        response.status === 200 && setCurrentStudents(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="admin-main">
      <header className="admin-main__header">
        <h1 className="admin-main__title">Students table</h1>
      </header>
      <main className="admin-main__main">
        {currentStudents && <StudentsTable currentStudents={currentStudents} />}
      </main>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import Scanner from "./Components.js/Scanner";
import ScrollingNames from "./Components.js/ScrollingNames";
import Confetti from "react-confetti";
import {
  //fetchCurrentStudents,
  handleCurrentStudentsResponse,
} from "./Functions/CurrentStudents";
import { BASEURL } from "../misc.js";

export default function ScannerMain() {
  const [currentStudents, setCurrentStudents] = useState([]);
  const [showCelebration, setCelebration] = useState(false);

  const submitScan = (scanValue) => {
    console.log("scanValue", scanValue);
    axios.get(BASEURL + "/scan/" + scanValue).then((response) => {
      console.log(response);
      if (response.status === 200) {
        if (!currentStudents.find((x) => x === scanValue)) {
          console.log("exists in list already");
          setCurrentStudents([...currentStudents, scanValue]);
        }
        setTimeout(() => {
          setCelebration(false);
        }, 10000);
        setCelebration(true);
        // handleSuccessfulResponse(scanValue);
      }
    });
  };

  useEffect(() => {
    //fetchCurrentStudents()
    axios
      .get(BASEURL + "/scan")
      .then((response) => {
        const currentStudentsArray = handleCurrentStudentsResponse(response);
        setCurrentStudents(currentStudentsArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {showCelebration && (
        <>
          <Confetti tweenDuration={1000} />
          <h1 className="celebrateName">Congratulations!!</h1>
        </>
      )}
      <Scanner submitScan={submitScan} />
      <ScrollingNames currentStudents={currentStudents} />
    </div>
  );
}

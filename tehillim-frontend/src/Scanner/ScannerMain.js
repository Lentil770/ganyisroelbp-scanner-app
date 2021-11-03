import React, { useEffect, useState } from "react";
import axios from "axios";
import Scanner from "./Components.js/Scanner";
import ScrollingNames from "./Components.js/ScrollingNames";
import Confetti from "react-confetti";
import { handleCurrentStudentsResponse } from "./Functions/CurrentStudents";
import { BASEURL } from "../misc.js";
import TitleBar from "./Components.js/TitleBar";

export default function ScannerMain() {
  const [currentStudents, setCurrentStudents] = useState([]);
  const [showCelebration, setCelebration] = useState(false);
  const [newStudentName, setNewStudentName] = useState("");

  const submitScan = (scanValue) => {
    console.log("scanValue", typeof scanValue);

    axios.get(BASEURL + "/scan/" + scanValue).then((response) => {
      console.log(response);
      setNewStudentName(scanValue);
      if (response.status === 200) {
        if (!currentStudents.find((x) => x === scanValue)) {
          setCurrentStudents([...currentStudents, scanValue]);
        }
        setTimeout(() => {
          setCelebration(false);
        }, 6000);
        setCelebration(true);
      }
    });
  };

  useEffect(() => {
    console.log("useEffect");
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
          <span style={styles.celebrateName} className="celebrateName">
            Well Done {newStudentName}!
          </span>
        </>
      )}
      <TitleBar />
      <Scanner submitScan={submitScan} />
      <ScrollingNames currentStudents={currentStudents} />
    </div>
  );
}

const styles = {
  celebrateName: {
    fontSize: "5em",
    fontWeight: "bold",
    color: "#0E2E44",
    textAlign: "center",
    position: "absolute",
    top: "43%",
    width: "100%",
    backgroundColor: "#88C1E7",
  },
};

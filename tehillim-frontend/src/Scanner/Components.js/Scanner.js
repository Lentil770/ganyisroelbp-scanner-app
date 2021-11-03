import { useState } from "react";

export default function Scanner({ submitScan }) {
  const [scanInput, setScanInput] = useState("");

  const handleScanSubmit = (e) => {
    e.preventDefault();
    submitScan(scanInput);
    setScanInput("");
  };
  const handleKeyDown = (e) => {
    //checks if enter or tab pressed to submit
    if (e.keyCode === 13 || e.keyCode === 9) {
      submitScan(scanInput);
      setScanInput("");
    }
  };
  const barcodeAutoFocus = () => {
    document.getElementById("scanBarcode").focus();
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "20%" }}>
      <form onSubmit={handleScanSubmit}>
        <input
          style={{
            width: "400px",
            fontSize: 60,
          }}
          autoFocus={true}
          placeholder=" Scan Here!"
          name="scanBarcode"
          id="scanBarcode"
          value={scanInput}
          onChange={(e) => setScanInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={barcodeAutoFocus}
        />
      </form>
    </div>
  );
}

import axios from "axios";
import { useState } from "react";

export default function Scanner({ submitScan }) {
  const [scanInput, setScanInput] = useState("");

  const handleScanSubmit = (e) => {
    e.preventDefault();
    console.log(scanInput);
    submitScan(scanInput);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      submitScan(scanInput);
    }
  };

  return (
    <div>
      <form onSubmit={handleScanSubmit}>
        <input
          autoFocus={true}
          placeholder="Scan Your Barcode Here!"
          name="scan-barcode"
          id="scan-barcode"
          value={scanInput}
          onChange={(e) => setScanInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
}

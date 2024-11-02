import React from "react";
import logo from "./logo.svg";
import Papa from "papaparse";

import "./App.css";

function App() {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file

    if (file) {
      Papa.parse(file, {
        header: true, // Parse the header row
        complete: (results) => {
          console.log("Parsed Data:", results.data); // Output the parsed data to the console
        },
        error: (error) => {
          console.error("Error while parsing:", error); // Handle parsing errors
        },
      });
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div className="input-file-container">
      <label className="input-file">
        Choose File
        <input
          type="file"
          id="uploadCsv"
          accept=".csv"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}

export default App;

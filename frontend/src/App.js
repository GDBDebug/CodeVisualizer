import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [currentDateTime, setCurrentDateTime] = useState(0);

  useEffect(() => {
    fetch("/now")
      .then((result) => result.json())
      .then((data) => {
        setCurrentDateTime(data.now);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current date and time is {currentDateTime}.</p>
      </header>
    </div>
  );
}

export default App;

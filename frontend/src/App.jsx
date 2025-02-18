import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const fetchGreeting = async () => {
    if (!name.trim()) {
      setGreeting("Name is required.");
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/api/greet?name=${name}`);
      setGreeting(response.data.message);
    } catch (error) {
      setGreeting("Error fetching greeting.");
    }
  };

  return (
    <div className="container">
      <h1 className="company-name">Younglabs Innovations Private Limited</h1>
      <h2 className="title">Greeting App</h2>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button className="greet-button" onClick={fetchGreeting}>Get Greeting</button>
      </div>
      <h2 className="greeting-message">{greeting}</h2>
    </div>
  );
}

export default App;
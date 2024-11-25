import React from "react";
import Dashboard from "./components/Dashboard";
import IngestDataComponent from "./components/IngestData";

function App() {
  return (
    <div className="App">
      <h1>Smart Mobility Dashboard</h1>
      <IngestDataComponent />
      <Dashboard/>
    </div>
  );
}

export default App;


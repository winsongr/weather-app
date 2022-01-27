import React, { useState } from "react";
import "./App.css";
import Inputcom from "./components/Inputcom";
const [input, setInput] = useState(initialstate)
function App() {
  return (
    <div className="App">
      <Inputcom />
    </div>
  );
}

export default App;

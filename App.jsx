import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  let present = new Date().toLocaleTimeString();
  const [time, setTime] = useState(present);
  function updateTime() {
    const updated = new Date().toLocaleTimeString();
    setTime(updated);
  }
  return (
    <div className="container">
      <h1>{present}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

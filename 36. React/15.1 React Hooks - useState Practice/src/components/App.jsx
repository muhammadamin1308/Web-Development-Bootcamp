import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString().replace(/AM|PM/, "");
  const [time, setTime] = useState(now);

  function refresh() {
    let newTime = new Date().toLocaleTimeString().replace(/AM|PM/, "");
    setTime(newTime);
  }
  setInterval(refresh, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refresh}>Get Time</button>
    </div>
  );
}

export default App;

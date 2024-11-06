import React from "react";

function App() {
  // Function to trigger the alert
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="App">
      <h1>React Alert Example</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

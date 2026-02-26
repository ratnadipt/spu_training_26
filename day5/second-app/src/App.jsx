import { useState } from "react";

function App() {
  // Array Destructuring
  let [count, setCount] = useState(0);

  const handleUp = () => {
    setCount((cur) => cur + 1);
  };

  const handleDown = () => {
    setCount((cur) => cur - 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button type="button" onClick={handleDown}>
        Down
      </button>
      <button type="button" onClick={handleUp}>
        Up
      </button>
    </div>
  );
}

export default App;

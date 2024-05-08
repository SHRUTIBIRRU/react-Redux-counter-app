import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div></div>
      <h2>Count Number: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

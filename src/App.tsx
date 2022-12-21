import { useState } from "react";

import "./App.css";

function App() {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  return (
    <div className="App">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((number, columnIndex) => (
              <div key={columnIndex}>{number}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

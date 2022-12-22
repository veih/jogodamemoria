import { useState } from "react";

import "./App.css";

function App() {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const [isReveled, setIsReveled] = useState(
    new Array(grid.length)
      .fill("")
      .map(() => new Array(grid[0].length).fill(false))
  );

  const handleSelectedCard = (row: number, column: number) => {
    const newIsReveled = [...isReveled]
    newIsReveled[row][column] = true;
    setIsReveled(newIsReveled)
    // número deve aparecer
    // clicar novamente e um segundo número deve aparecer
    // comparar os dois números:
    // se for igual sussesso
    // se for diferentes voltar os números ocutos
    
  };

  return (
    <div className="App">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((number, columnIndex) => (
              <div
                className="card"
                key={columnIndex}
                onClick={() => handleSelectedCard(rowIndex, columnIndex)}
              >
                {isReveled[rowIndex][columnIndex] ? number : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

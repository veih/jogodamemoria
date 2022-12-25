import { useState } from "react";

import "./App.css";

interface Tcell {
  row: number,
  column: number
}
function App() {
  const [grid, setGrid] = useState([
    [0, 1, 4, 2],
    [2, 5, 3, 0],
    [3, 4, 1, 5],
  ]);

  const [isReveled, setIsReveled] = useState(
    new Array(grid.length)
      .fill("")
      .map(() => new Array(grid[0].length).fill(false))
  );

  const [firstItem, setFirstItem] = useState<Tcell>();

  const handleSelectedCard = (row: number, column: number) => {
    if (isReveled[row][column]) return
    const card = grid[row][column];
    const newIsReveled = [...isReveled];
    newIsReveled[row][column] = true;

    if (firstItem) {
      const newFirstItem = grid[firstItem.row][firstItem.column];
      if (newFirstItem !== card) {
        setTimeout(() => {
          newIsReveled[firstItem.row][firstItem.column] = false;
          newIsReveled[row][column] = false;
          setIsReveled([...newIsReveled]);
        }, 1000);
      } else {
        const youWin = isReveled.flat().every((item) => item)
        if (youWin) {
          setTimeout(() => {
            alert("You win!");
          });
          
        }
      }
      setFirstItem(undefined)
    } else {
      setFirstItem({
        row: row,
        column: column
      });
    }

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
                className={
                  "card " + (isReveled[rowIndex][columnIndex] ? "clicked" : "")
                }
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

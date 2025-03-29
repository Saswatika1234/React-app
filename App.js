import React, { useState } from "react";
import "./App.css"; 

const Grid = () => {
  const [grid, setGrid] = useState(Array(3).fill(Array(3).fill("white")));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (row, col) => {
    
    if (clickOrder.length === 8 && !clickOrder.some(([r, c]) => r === row && c === col)) {
      animateOrange();
      return;
    }

setGrid((prevGrid) => {
  const newGrid = prevGrid.map((r) => [...r]);
  newGrid[row][col] = "green";
  return newGrid;
});

setClickOrder((prevOrder) => [...prevOrder, [row, col]]);
};

const animateOrange = () => {
clickOrder.forEach(([r, c], index) => {
  setTimeout(() => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);
      newGrid[r][c] = "orange";
      return newGrid;
    });
  }, index * 500); 
});
};

return (
<div className="grid">
  {grid.map((row, rowIndex) =>
    row.map((color, colIndex) => (
      <div
        key={`${rowIndex}-${colIndex}`}
        className="box"
        style={{ backgroundColor: color }}
        onClick={() => handleClick(rowIndex, colIndex)}
      ></div>
    ))
  )}
</div>
);
};

export default function App() {
  return (
    <div className="container">
      <h2>3x3 Clickable Grid</h2>
      <Grid />
    </div>
  );
}

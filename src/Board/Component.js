import React, { useState } from 'react';
import Square from "../Square";
import calculateWinner from "../shared/hooks/calculateWinner";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  function handleClick(i) {
    const squaresClone = [...squares];
    if (calculateWinner(squares) || squares[i]) return;
    squaresClone[i] = xIsNext ? "X" : "O";
    setSquares(squaresClone);
    setXisNext(!xIsNext);
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `The winner is player ${winner}`;
  }
  else {
    status = `Next player is ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div >
  );
}

export default Board;

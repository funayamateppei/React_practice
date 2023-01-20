import { useState } from "react";
import Board from "./Board";
import "./App.css";

const Game = () => {

  const [history, setHistory] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (e) => {
    const newHistory = [...history];
    // 値が入っていれば書き換えられないように！
    if (newHistory[e.target.value]) {
      // console.log("hoge");
      return;
    }

    // 勝者判定
    if (winner || newHistory[e.target.value]) {
      return;
    }

    // console.log(newHistory);
    newHistory[e.target.value] = xIsNext ? "X" : "O";

    setHistory(newHistory);
    setXIsNext(!xIsNext);
    // console.log(history);
    setWinner(calculateWinner(newHistory));
  }


  const status = xIsNext ? "Next player: X" : "Next player: O";

  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={handleClick} history={history} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <div>{ winner ? `Winner:${winner}` : ""}</div>
      </div>
    </div>
  );
};

export default Game;
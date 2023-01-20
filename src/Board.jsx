import Square from "./Square";
import "./App.css";

const Board = ({ onClick, history }) => {
  // console.log(history);
  return (
    <div className="board">
      {history.map((x, i) => (
        <Square key={i} value={i} history={x} onClick={onClick}  />
      ))}

      {/* <Square onClick={onClick} value={0} />
      <Square onClick={onClick} value={1} />
      <Square onClick={onClick} value={2} />
      <Square onClick={onClick} value={3} />
      <Square onClick={onClick} value={4} />
      <Square onClick={onClick} value={5} />
      <Square onClick={onClick} value={6} />
      <Square onClick={onClick} value={7} />
      <Square onClick={onClick} value={8} /> */}
    </div>
  );
};

export default Board;
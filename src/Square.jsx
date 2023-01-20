import "./App.css";

const Square = ({ value, onClick, history }) => {
  // console.log(value);
  return <button onClick={onClick} value={value} className="square">{history}</button>;
};

export default Square;
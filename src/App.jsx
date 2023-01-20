import './App.css';
import Form from './practice/Form';
import AlertButton from './practice/AlertButton';

function App() {

  const name = "Funayama Teppei";

  const handleClick = () => {
    console.log("hoge");
  }

  return (
    <>
      <h1>Hello World!!!!</h1>
      <h2>Hello {name}</h2>
      <button onClick={handleClick}>ボタン</button>
      <Form />
      <AlertButton>アラート！！</AlertButton>
    </>
  )
}

export default App

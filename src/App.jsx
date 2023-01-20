import './App.css'

function App() {
  const name = "Funayama Teppei";
  const handleChange = () => {
    console.log("hoge");
  }

  return (
    <>
      <h1>name:{name}</h1>
      <button onClick={handleChange}>ボタン</button>
    </>
  )
}

export default App

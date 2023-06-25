import React,{useState} from "react"
import mainStyles from "./mainStyles.css"

const App = () => {
const [ increment, setIncrement ] = useState(0);

const incrementButton = () => {
  return setIncrement(increment + 1);
}

  return (
    <>
      <div className="container">
      <h1>Hello world</h1>
      <input type="number" value={increment}  />
      <button  onClick={incrementButton}>Incrementar</button>
      </div>
    </>
  )
}

export default App

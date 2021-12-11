import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    if (result.length > 0 && (result[result.length - 1] === '+' || result[result.length - 1] === '-' || result[result.length - 1] === '*' || result[result.length - 1] === '/') && (e.target.name === '+' || e.target.name === '-' || e.target.name === '*' || e.target.name === '/')) {
      const newResult = result.slice(0, result.length - 1).concat(e.target.name);
      setResult(newResult);
    } else {
      setResult(result.concat(e.target.name));
    }
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    if (result === "Error") {
      setResult("")
    } else {
      setResult(result.slice(0,-1))
    }
  }

  const Result = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }

  return (
    <>
    <div className="main">
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button onClick={backspace}>C</button>
          <button onClick={clear} id="clear">Clear</button>
          <button className="operation" name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="operation" name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="operation" name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="operation" name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={Result} id="result">=</button>
        </div>
      </div>
    </div>    
    </>
  );
}

export default App

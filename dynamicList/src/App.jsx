import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [items,setItems] =useState([]);
  const [inputValue,setInputValue] =useState("")

  const addItem = () => {
      if (inputValue.trim() !== "") {
          setItems([...items, inputValue]);
          setInputValue("");
      }
  };

  return (
      <div className="container">
          <h2>Dynamic List Manager</h2>
          <div className="input-container">
              <input
              type="text"
              value={inputValue}
              onChange={(e) =>setInputValue(e.target.value)}
              placeholder="Enter an item"
              />
              <button onClick={addItem}>Add Item</button>
          </div>
          <ul className="list-container">
              {items.map((item,index) => (
                  <li key={index}>{item}</li>
               ))}
          </ul>
      </div>
  )   
}

export default App

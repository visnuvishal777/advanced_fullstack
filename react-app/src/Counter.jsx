// JSX = HTML + JS

import React, { useState } from 'react'
import Home from './Home'

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleAddClick = () => {
    setCount(count + 1);
  }

  const handleSubClick = () => {
    setCount(count - 1);
    if(count <= 0 ){
      setCount(0);
    }
  }
  const handleResetClick = () => {
    setCount(0);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">

      <b><h1 className='text-6xl text-blue-400'>Counter: {count}</h1></b>

      <div className="flex space-x-4">
        <button 
          onClick={handleAddClick} 
          className="bg-green-500 px-4 py-2 border-2 rounded-2xl cursor-pointer"
        >
          Increment +
        </button>

        <button 
          onClick={handleSubClick} 
          className="bg-red-400 px-4 py-2 border-2 rounded-2xl cursor-pointer"
        >
          Decrement -
        </button>

        <button 
          onClick={handleResetClick} 
          className="bg-yellow-300 px-4 py-2 border-2 rounded-2xl cursor-pointer"
        >
          Reset
        </button>
      </div>

    </div>
  )
}

export default Counter

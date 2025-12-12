// JSX = HTML + JS

import React from 'react'
import Home from './Home'

const Greeting = ({name,age,ph}) => {
  return (
    <>
    <p className="text-red-500 text-4xl bg-green-300">React - Day4 - Frontend</p>
    <p>{name}</p>
    <p>{age}</p>
    <p>{ph}</p>
    <Home />
    </>

  )
}

export default Greeting

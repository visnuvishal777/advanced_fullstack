import React from 'react'
import Greeting from './Greeting'
import Counter from './Counter'
import Home from './Home'
import Demo from './Demo'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  const users = [
    { id: 1, name: "Visnu", location: "Tamil Nadu" },
    { id: 2, name: "Dhoni", location: "Jharkhand" },
    { id: 3, name: "Virat", location: "Delhi" },
  ]

  return (
  
      <>
      {/* <Demo /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/demo' element={<Demo />} />
      </Routes>
      </>
  )
}

export default App
 
import React from 'react'

const Home = () => {
  const users = [
    { id: 1, name: "Visnu", location: "Tamil Nadu" },
    { id: 2, name: "Dhoni", location: "Jharkhand" },
    { id: 3, name: "Virat", location: "Delhi" },
  ]

  return (
    <div className="flex items-center justify-center h-screen">
      <ul className="text-blue-500 flex flex-col gap-2 text-5xl" >
        <span className='text-red-500'>Location List</span>
        <span>--------------------</span>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - 📍{user.location}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

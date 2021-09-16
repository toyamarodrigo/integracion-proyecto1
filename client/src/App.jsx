import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(null)

  const handleFetch = () => { 
    axios.get('http://localhost:3001/read')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button type="button" onClick={() => handleFetch()}>
            FETCH
          </button>
        </p>
      </header>
    </div>
  )
}

export default App

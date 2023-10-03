import { useState } from 'react'

import './App.css'
import Welcome from './components/welcome/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      <Welcome/>
    </div>
  )
}

export default App

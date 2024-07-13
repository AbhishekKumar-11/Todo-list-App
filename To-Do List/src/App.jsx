import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo_input from './components/Todo_input'
import Todo_main from './components/Todo_main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo_main/>
    </>
  )
}

export default App

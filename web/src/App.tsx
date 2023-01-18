import { useState } from 'react'
import Habit from './components/Habit'
import './styles/global.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Habit  test={3} />
    </div>
  )
}

export default App

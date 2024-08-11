import { useState } from 'react'
import './App.css'
import UseMemo from './component/useMemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseMemo/>
    </>
  )
}

export default App

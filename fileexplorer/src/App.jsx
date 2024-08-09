import { useState } from 'react'
import FileExplorer from "./data/fileExplorerData"
import './App.css'
import Folder from './component/Folder';

function App() {
  const [count, setCount] = useState(0)
  const [expData, setexpData] = useState(FileExplorer)

  return (
    <>
      <Folder data={expData}/>
    </>
  )
}

export default App

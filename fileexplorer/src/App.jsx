import { useState } from 'react'
import FileExplorer from "./data/fileExplorerData"
import './App.css'
import Folder from './component/Folder';
import useTraverseTree from './hooks/useTraverseTree';

function App() {
  const [count, setCount] = useState(0)
  const [expData, setexpData] = useState(FileExplorer)
  const {insertNode}=useTraverseTree();
  function handleInsertNode(folderId, nodeItem,isFolder) {

    const finalTree=insertNode(expData,folderId,nodeItem,isFolder);
    setexpData(finalTree);
    
  }
  return (
    <>
      <Folder data={expData} handleInsertNode={handleInsertNode}/>
    </>
  )
}

export default App

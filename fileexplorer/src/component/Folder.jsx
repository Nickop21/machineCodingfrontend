import React, { useState } from "react";
import useTraverseTree from "../hooks/useTraverseTree";

function Folder({ data,handleInsertNode }) {
  const [isOpen, setisOpen] = useState(false);
  const [inputVisibility, setInputVisibility] = useState({
    visible: false,
    isFolder: false,
  });
  // const [newData, setNewData] =

  
  function newAdd(e, isFolder) {
    e.stopPropagation();
    setisOpen(true);
    setInputVisibility({
      visible: true,
      isFolder: isFolder,
    });
    
  }
  function onAddFolder(e) {
    if (e.keyCode === 13 && e.target.value) {
      setInputVisibility({
        ...inputVisibility,
        visible: false,
      });
      handleInsertNode(data.id,e.target.value,inputVisibility.isFolder)
    }
  }
  return data.isFolder ? (
    <>
      <div
        style={{
          width: "40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          margin: "5px",
          backgroundColor: "grey",
          cursor: "pointer",
        }}
        onClick={() => setisOpen(!isOpen)}
      >
        <span>📁 {data.name}</span>
        <span>
          <button onClick={(e) => newAdd(e, true)}>📁 +</button>
          <button
            onClick={(e) => newAdd(e, false)}
            style={{ margin: "0 10px" }}
          >
            🗒️ +
          </button>
        </span>
      </div>
      <div style={{ marginLeft: "20px", display: isOpen ? "block" : "none" }}>
        
        {inputVisibility.visible && (
          <>
          {inputVisibility.isFolder ? <>📁</> : <>🗒️</>}
          <input type="text" onKeyDown={(e)=>onAddFolder(e)} onBlur={(e) => {
            setInputVisibility({
              ...inputVisibility,
              visible: false,
            });
          }} autoFocus />
          </>
        )}
      </div>

      {data.items?.map((exp) => {
        return (
          <div
            key={exp.id}
            style={{ marginLeft: "40px", display: isOpen ? "block" : "none" }}
          >
            <Folder data={exp} handleInsertNode={handleInsertNode} />
          </div>
        );
      })}
    </>
  ) : (
    <div>🗒️ {data.name}</div>
  );
}

export default Folder;

import React, { useState } from "react";

function Folder({ data }) {
  const [isOpen, setisOpen] = useState(false);
  return data.isFolder ? (
    <>
      <div>
        <span style={{cursor:"pointer"}} onClick={() => setisOpen(!isOpen)}>📁 {data.name}</span>
      </div>
      {data.items.map((exp) => {
        return (
          <div
            key={exp.id}
            style={{ marginLeft: "20px", display: isOpen ? "block" : "none" }}
          >
            <Folder data={exp} />
          </div>
        );
      })}
    </>
  ) : (
    <div>🗒️ {data.name}</div>
  );
}

export default Folder;

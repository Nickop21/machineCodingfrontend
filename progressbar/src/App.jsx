import { useEffect, useState } from "react";
import ProgressBar from "./progressBar";
import "./App.css";

function App() {
  const [percentageval, setPercentageVal] = useState(0);
  const [completed, setcompleted] = useState(false)

  useEffect(() => {
    
  setInterval(() => {
    setPercentageVal((perval)=>perval+1)
  }, 100);
  }, [])
  
 
  return (
    <>
    <div className="container">

    <ProgressBar percentage={percentageval} onCompleted={()=>setcompleted(true)}/>
    <div style={{fontSize:"30px", color:"white"}}>{completed?"Completed":"Loading..."}</div>
    </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import "./App.css";

function ProgressBar({percentage=0,onCompleted=()=>{}}) {
    const [checkedPercentage, setcheckedPercentage] = useState(percentage)

    useEffect(() => {
        setcheckedPercentage(Math.min(100,Math.max(percentage,0)))
        if(checkedPercentage>=100){
            onCompleted()
        }
    }, [percentage])

  return (
    <div className='progress'>
        <span className='percentageText'
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={checkedPercentage}
        
        style={{color:checkedPercentage>49?"black":"white"}}>{checkedPercentage}%</span>
        <div className="percentage" style={{width:`${checkedPercentage}%`}}></div>
      
    </div>
  )
}

export default ProgressBar

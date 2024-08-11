import React, { useEffect, useMemo, useState } from 'react'
import useCustomMemo from '../customhooks/useCustomMemo';

function UseMemo() {
    const [counter1, setcounter1] = useState(0)
    const [counter2, setcounter2] = useState(100)

    function ExpensiveFunction(){

        console.log("expensive function called");
        return counter1+1
    }
    const memorize= useCustomMemo(() => ExpensiveFunction(), [counter1])
    
  return (
    <div>
        <h1>Counter 1: {counter1}</h1>
        <h2>Squared valeue :{memorize}</h2>
        <button onClick={() =>setcounter1(counter1+1) }>Increment Counter 1</button>
        <h1>Counter 2: {counter2}</h1>
        <button onClick={() => setcounter2(counter2 - 1)}>Decreament Counter 2</button>
      
    </div>
  )
}

export default UseMemo

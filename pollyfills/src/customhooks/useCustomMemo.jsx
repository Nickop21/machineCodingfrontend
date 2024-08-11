import React, { useRef } from 'react'

function equality(prevdp,nextdp) {
    if(nextdp === undefined) return false
    if(prevdp.length!=nextdp.length) return false

    for(let i=0;i<prevdp.length;i++){
        if(prevdp[i]!==nextdp[i]) return false
    }
    return true
    
}

function useCustomMemo(cb ,deps) {
    const memorizedRef=useRef(null)

    if(!memorizedRef.current || !equality(memorizedRef.current.deps,deps)) // prev ,current(next)
    {
        memorizedRef.current={
            value:cb(),  // if eual so function cb notf called return alredy exost valu
            deps
        }
    }


  return memorizedRef.current.value
}

export default useCustomMemo

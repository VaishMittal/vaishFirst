import { useState } from 'react'

function Statesexample() {
    const [count,setCount]=useState(0);
  return (
    <div style={{paddingTop:40}}>
        <button  onClick={()=>setCount(count+1)} >Increase</button>
        <button onClick={()=>setCount(count-1)} >Decrease</button>
        <h1>Value : {count}</h1>

      
    </div>
  )
}

export default Statesexample

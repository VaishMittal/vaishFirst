import { useState } from 'react'

function ColorChange() {
    const [color,setColor]=useState("red");
const styleIs={marginRight:20,height:40,width:90,fontSize:20,};
  return (
    <div className='box'>
        <h1>My favorite color is <span style={{color:color}}>{color}</span> </h1>
        <button style={styleIs} onClick={()=>setColor("red")}><b>Red</b></button>
        <button style={styleIs} onClick={()=>setColor("green")}><b>Green</b></button>
        <button style={styleIs} onClick={()=>setColor("blue")}><b>Blue</b></button>
        <button style={styleIs} onClick={()=>setColor("brown")}><b>Brown</b></button>
    </div>
  )
}

export default ColorChange

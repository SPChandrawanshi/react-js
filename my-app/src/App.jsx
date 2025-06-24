
import './App.css'

import React, { useState } from 'react'

function App() {
  const [color ,setColor] = useState("olive")
  return (
    <>
<div>
  <div className="w-full h-screen duration-200 "
  style={{backgroundColor:color}}
  >
    <div className="fixed flex flex-wrap justify-center align-content-center bottom-48 inset-x-0 p-2" > 
      <div className="flex flex-wrap justify-content-center gap-3 shadow-lg bg-white p-2 rounded-3xl">
        <button  onClick={()=>setColor("red")} className='   text-white outline-none px-4 rounded-3xl out'  style={{backgroundColor:"red"}}>Red</button>

        <button  onClick={()=>setColor("green")} className=' text-white outline-none px-4 rounded-3xl out'style={{backgroundColor:"green"}}>Green</button>

        <button onClick={()=>setColor("yellow")} className=' text-white outline-none px-4 rounded-3xl out' style={{backgroundColor:"yellow"}}>Yellow</button>

        <button onClick={()=>setColor("sky")} className='bg-gold-700 text-white outline-none px-4 rounded-3xl out' style={{backgroundColor:"gold"}}>gold</button>

        <button onClick={()=>setColor("orange")} className=' text-white outline-none px-4 rounded-3xl out' style={{backgroundColor:"orange"}}>Gold</button>

        <button onClick={()=>setColor("green")} className=' text-white outline-none px-4 rounded-3xl out'style={{backgroundColor:"green"}}>Green</button>

        <button onClick={()=>setColor("blue")} className=' text-white outline-none px-4 rounded-3xl out' style={{backgroundColor:"blue"}}>Blue</button>
        </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App


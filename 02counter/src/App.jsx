import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(0)

  // let counter = 5
  const addvalue =()=>{
    // counter = counter+1;
    setcounter(counter+1)
    if(counter==20){
      setcounter(counter=20)
    }
    console.log("Clicked ",counter);

  }

  const removevalue =()=>{
    setcounter(counter-1)
    if(counter==0){
       setcounter(counter=0)
    }
  }

  return (
    <>
     <h1>Chai or react</h1>
     <h2>Counter value : { counter}</h2>

     <button
     onClick={addvalue}>Add value </button>
     <br />
     <button
     onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/Card'

function App() {
  let myobj = {
    username :"hitesh",
    age:21
  }
  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-3 '>Hello world</h1>
      <Card username="ChaiorCode" someObj={myobj} btnText="Read me to more content"  />
      <Card username="hello duniya"/>

    </>
  )
}

export default App

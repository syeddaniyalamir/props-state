import React, { useState } from 'react'
import Project from './Components/Project';
import Home from './Components/Home';

const App = () => {
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Change Name");
  

  // Alag se handleNext aur handleBack functions banane ki zaroorat nahi.
  // Hum props ke andar hi arrow functions bana sakte hain.
  // Is se code short aur simple rahega.
  //=============================================================================
  // const handleNext = ()=>{
  //   setClick(true);
  // }
  // const handleBack = ()=>{
  //   setClick(false);
  // }
  return (
    <div>
      {click ?
        <Project
          back={() => setClick(false)}
          count={count}
          increase={() => setCount(count + 1)}
          decrease={() => setCount(count - 1)}
          reset={() => setCount(0)}
          name={name}
          changename={() => setName("Daniyal Amir Is Here")}
          oldname={() => setName("Change Name")}

        />
        : <Home next={() => setClick(true)} />}
    </div>
  )
}

export default App

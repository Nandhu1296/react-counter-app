import React,{useState} from 'react'

import "./App.css"

const App= () => {


  const [count, setCount]= useState(0);
return(

  <div className='App'>

  <header>
        <h1>nandha counter la koundamani mathiri</h1>
        <h2> count ippo vanthu  {count}</h2>

  </header>
<button onClick={()=>setCount(count+1)}>Increase button</button>
<button onClick={()=>setCount(count-1)}>decrease button</button>
<button onClick={()=>setCount(count*0)}>Reset button</button>


  </div>

);

}

export default App
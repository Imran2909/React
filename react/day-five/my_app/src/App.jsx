import { useRef, useState } from 'react';
import Timer from './Timer';
import './App.css';

function App() {
  const [val, setVal] = useState(0);
  const inpRef= useRef([]);

  const handleClick=()=>{
    console.log(inpRef)
  }
  
  return (
    <div className="App">
      <Timer/>
      {/* <input id="1" type="text" ref={(elem)=>{inpRef.current[0]=elem.innerText}} />
      <input id="2" type="text" ref={(elem)=>{inpRef.current[1]=elem.innerText}} />
      <input id="3" type="text" ref={(elem)=>{inpRef.current[2]=elem.innerText}} />
      <input id="4" type="text" ref={(elem)=>{inpRef.current[3]=elem.innerText}} />
     <button onClick={handleClick} >PRINT</button> */}
     </div>
     )
}

export default App;

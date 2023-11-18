import { useRef, useState } from 'react';
import './App.css';
import Navbars from "./components/Navbars"
import {AppContext} from './contexts/AppContext'
import {useContext} from 'react';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const val=useContext(AppContext);    
  const authVal=useContext(AuthContext);
  // console.log("in navbar ", val.theme);
  return (
    <div className="App">

      <Navbars/>
      <button onClick={()=>{val.toggle()}} >toggle theme</button>
      <button onClick={()=>{authVal.toggle()}} >toggle Auth</button>
     </div>
     )
}

export default App;

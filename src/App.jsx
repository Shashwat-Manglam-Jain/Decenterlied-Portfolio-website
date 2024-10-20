// 0x039525BE4e1d5Cf1021C4b39A6ACC70ff36a46F9
import { useState } from "react";
import Connect from "./Components/Connect";
import Name from "./Components/Name";
import Education from "./Components/Education";
import About from "./Components/About";
import Project from "./Components/Project";
import Buy from "./Components/Buy";

function App() {
  const [state,setState]=useState({
    web3:null,
    contract:null
  })
  const saveState=(state)=>{
    console.log(state);
    setState(state);
  }
  return (<>
  <Connect saveState={saveState}></Connect>
  <Name state={state}/>
  <Education state={state}/>
  <About state={state}/>
  <Project state={state}/>
  <Buy state={state}/>
  </>
  )
}

export default App

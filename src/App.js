
import './App.css';
import React, {useEffect, useRef, useState} from "react";
function App() {
    const [cnt,setCnt] = useState('')
    const [cnt1,setCnt1] = useState(-1)
        useEffect(()=>{
            setCnt1(cnt1+1)
        },[cnt])
      return (
        <div className="App">
          <h1>{cnt1}</h1>
          <input type="text" onChange={(event)=>{setCnt(event.target.value)}} value={cnt}/>
          <input type="text" onChange={(event)=>{setCnt1(parseInt(event.target.value))}} value={cnt1}/>
        </div>
      );
}

export default App;

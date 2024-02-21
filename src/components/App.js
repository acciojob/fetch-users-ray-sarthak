
import React, { useState } from "react";
import './../styles/App.css';
import FetchUser from "./FetchUser";




const App = () => {


  const [result,setResult]=useState({});
  const[checker,setChecker]=useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="header">
        <h2>Blue Whales</h2>
        <button id="get-result" onClick={()=>setChecker(true)}>Get User List</button>
      </div>

            {checker&&<FetchUser />}

    </div>
  )
}

export default App

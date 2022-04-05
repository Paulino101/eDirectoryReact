import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardMap from "./components/CardMap";

function App() {
  // state
  const [array, setArray] = useState([]);
 
   // variables
   const url = 'https://randomuser.me/api/?results=5&inc=name'
   
  // axios
  const getApi = () => {
    axios.get(url).then((response) => {
      console.log(response.data.results);
      setArray(response.data.results)
    })
  }
  // loop

 

    
  return (
  <React.Fragment>
    <button onClick={getApi}> get name</button>
    <p>{}</p>
    <CardMap data={array}/>
  </React.Fragment>
  );
}

export default App;

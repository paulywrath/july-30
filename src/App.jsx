import { useEffect, useState } from "react";

function App() {

  const [daves, setDaves] = useState([]);

  useEffect(()=>{
    const getDaves = async() => {
      const response = await fetch (`http://localhost:3000/api/v1/daves`);
      const result = await response.json();
      setDaves(result);
    }
    getDaves();
  },[])

  return (
    <>
      <h1>please work</h1>

      <ul>
      {
        daves.map((dave) => {
          return <li>{dave}</li>
        }) 
      }
      </ul>
    </>
  )
}

export default App

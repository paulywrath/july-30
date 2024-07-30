import { useEffect, useState } from "react";

function App() {

  const [daves, setDaves] = useState([]);

  const basePath = process.env.NODE_ENV === `production` ? `https://july-30.onrender.com/` : `http://localhost:3000/`

  useEffect(()=>{
    const getDaves = async() => {
      const response = await fetch (`${basePath}api/v1/daves`);
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

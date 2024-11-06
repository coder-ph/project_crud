import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Fruitlist from "./components/FruitList";
import "./App.css"

function App() {

  const [fruits, setFruitData] = useState([])

 

useEffect(()=>{
   const jsonData = "http://localhost:3000/Fruits"
  fetch(jsonData)
  .then((response)=> response.json())
  .then((data)=> setFruitData(data))
  .catch((error)=> console.error('Error fetching data:', error));
}, [])


  return(
    <>
      <Fruitlist  fruits={fruits} setFruits={setFruitData}/>
    </>
  )
}

export default App

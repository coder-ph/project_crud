import { useState } from "react"
import FruitDetails from "./FruitDetails"

function Fruitlist({fruits, setFruits}){
    const[newFruit, setNewFruit] = useState({
        name: "",
        color: "",
        scientific: "",
        image: "",
        price:0
    })

    function handleAdd(e){
        const name = e.target.name
        const value = e .target.value

        setNewFruit({
            ...newFruit, 
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        

        fetch("http://localhost:3000/Fruits",{
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
           body: JSON.stringify(newFruit) 
        })
        .then((response)=> response.json())
        .then((fruit)=> setFruitData([... fruits, fruit]))
        .catch((error)=> console.error(error)) // to be continued 
        
    }
    

    return (
      <>
      <h1>Fruit Lists</h1>
        <div className="my-fruit">
          {fruits.map((fruit) => (
            <FruitDetails
              name={fruit.name}
              color={fruit.color}
              scientific={fruit.scientific}
              image={fruit.image}
              price={fruit.price}
              key={fruit.id}
              id={fruit.id}
              fruits={fruits}
              setFruits={setFruits}
            />
          ))}

          <form onSubmit={handleSubmit}>
            <input
              onChange={handleAdd}
              value={newFruit.name}
              type="text"
              name="name"
              placeholder="Enter fruit name"
              required
            />
            <input
              onChange={handleAdd}
              type="text"
              name="color"
              value={newFruit.color}
              placeholder="Enter fruit color"
              required
            />
            <input
              onChange={handleAdd}
              type="text"
              name="scientific"
              value={newFruit.scientific}
              placeholder="Enter fruit scientific name"
              required
            />
            <input
              onChange={handleAdd}
              type="url"
              name="image"
              value={newFruit.image}
              placeholder="Enter fruit Url"
              required
            />
            <input
              onChange={handleAdd}
              type="number"
              name="price"
              value={newFruit.price}
              placeholder="Enter fruit price"
              required
            />
            <button type="submit">Add Fruit</button>
          </form>
        </div>
      </>
    );
}

export default Fruitlist
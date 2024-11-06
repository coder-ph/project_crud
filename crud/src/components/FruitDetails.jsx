import { useState } from "react";

function FruitDetails({ id, name,price, scientific, color, fruits, setFruits, image }) {
    const [newFruitData, setNewFruitData] = useState({
        color: '',
        scientific: ""
        
    });

    // DELETE a list item
    function handleDelete() {
        fetch(`http://localhost:3000/Fruits/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then(() => {
            let remainingFruits = fruits.filter(fruit => fruit.id !== id)
            setFruits(remainingFruits)
        })
        .catch(error => console.error(error))
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setNewFruitData({
            ...newFruitData,
            [name]: value
        });
    }

    // UPDATE the list involved
    function handleUpdate(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/Fruits/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFruitData)
        })
        .then(res => res.json())
        .then(myFruit => {
            let updatedFruits = (fruits || []).map(fruit => {
            if (fruit.id === id) {
                fruit.scientific = myFruit.scientific;
                fruit.color = myFruit.color;
            }
            return fruit;
        });

            setFruits(updatedFruits)
            setNewFruitData({
                scientific:"",
                color:""
            })
        })
        .catch((error)=> console.error('error:', error))
    }

    return (
      <div className="fruit-card">
        <h2>{name}</h2>
        <img src={image} />
        <h2>Color: {color}</h2>
        <h2>Scientific Name: {scientific}</h2>
        <h2>Price: ${price}</h2>

        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="scientific"
            placeholder="new scientific name"
            onChange={handleChange}
            value={newFruitData.scientific}
          />
          <input
            type="text"
            name="color"
            placeholder="new color"
            onChange={handleChange}
            value={newFruitData.color}
          />
          <button>Update</button>
        </form>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
}

export default FruitDetails;
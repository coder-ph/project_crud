function FruitDetails({name, color, scientific, image, price}) {
    return(
        <>
           <h2>{name}</h2> 
           <h3>{color}</h3>
           <img src={image} alt={name}/>
           <h2>{scientific}</h2>
           <h2>$<span>{price}</span></h2>

        </>
    )
}
export default FruitDetails

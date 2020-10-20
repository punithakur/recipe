import React from 'react'

const Recipy = ({title, calories, image , ingredients})=>{
    return(
        <>
        <div className="res">
            <h1 className="heading">{title}</h1>
            <h3>Ingredients</h3>
            <ol>
                {ingredients.map((ing) => (
                    <li>{ing.text}</li>
                ))}
            </ol>
            <p> {calories} Calories </p>
            <img src={image} alt="images"/>
        </div>
        </>
    )
}

export default Recipy
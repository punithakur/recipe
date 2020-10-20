import React, { useEffect, useState } from 'react';
import Recipy from './Recipy'

function App() {
  const App_id = "ea0c3076"
  const App_keys = "fc8d3b6dec096f38e5983cf822022f41"
  
  const [recipes, setRecipes] = useState([])
  const [search , setSearch] = useState("")
  const [query, setQuery] = useState('chicken')


  useEffect(()=>{
    getrecipy()
  }, [query] )

  const getrecipy = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_keys}`)
    const data = await response.json()
    setRecipes(data.hits)
  }
  const updatesearch = (e)=>{
    setSearch(e.target.value)
  }
  const getsearch= e=>{
    e.preventDefault()
    setQuery(search)
  }


  return (
    <div className="App">
      <form className="search-form" onSubmit={getsearch}>
        <input type="text" className="search-bar" onChange={updatesearch} />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map((val) => (
        <Recipy
          key={val.recipe.label}
          title={val.recipe.label}
          calories={val.recipe.calories}
          image={val.recipe.image}
          ingredients={val.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;

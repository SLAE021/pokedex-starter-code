import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
//en esgte componente haremos una llamada a la API para buscar la data



//1. De donde viene la data? API
//2. como nos anclamos a esa data?
//3. en qune momento hacemos la operacion?
//4. una vez que recibimos la data, que hacemos con ella


function Sidebar() {

const [ allPokemon, setAllPokemon] = useState(null)

  useEffect(() => {

    console.log("patata");
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAllPokemon(data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (allPokemon === null) {
    return <h3>... buscando pokemons</h3>
  }
  


  return (
    <nav className="sidebar">
      <h5>Elige un pokemon</h5>
    

{allPokemon.map((eachPokemon) =>{
  return (
    <Link to={"/"} key={eachPokemon.name}>{eachPokemon.name}</Link>
  )
}



)}




    </nav>
  )
}

export default Sidebar
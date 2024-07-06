import Pokedex from "./components/Pokedex/Pokedex"
import Search from "./components/Search/Search"
import './components/Pokedex/Pokedex.css'
import './App.css'
import PokemonList from "./components/PokemonList/PokemonList"
function App() {
  return (
    <div className="Pokedex-wrapper">
      <Search/>
      <PokemonList/>
    </div>
  )
}

export default App

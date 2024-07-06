import { Routes , Route } from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";
import App from "../App";

function CostomRoutes(){
  return(
    <Routes>
        <Route path="/"  element={<App/>}/>
        <Route path="/pokemon/:id"  element={<PokemonDetails/>}/>
    </Routes>
  )
}

export default CostomRoutes;
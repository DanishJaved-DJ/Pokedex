import { useParams } from "react-router-dom";
import axios from 'axios';
import './pokemonDetail.css'
import { useEffect, useState } from "react";
function PokemonDetails(){
   const {id}=useParams();
   // console.log(id);

   const [pokemon,setPokemon]=useState({});

    async function downloadPokemon(){
      const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      // console.log(response.data);
      setPokemon({
         name:response.data.name,
         image:response.data.sprites.other.dream_world.front_default,
         weight:response.data.weight,
         height: response.data.height,
         types:response.data.types.map((t)=>t.type.name)
      })
    }
    
    useEffect(()=>{
      downloadPokemon();
    },[]);
    return(
    <div className="pokemon-detail">
      <div className="box">
      <img src={pokemon.image} alt="" className="pokemonImage" />
      <div className="pokemonName">{pokemon.name}</div>
 
  <div className="ran">Height : {pokemon.height}</div>
  <div className="ran">Weight : {pokemon.weight}</div>
<div className="pokemonTypes">
   {pokemon.types && pokemon.types.map((t)=><div key={t}> {t} </div>)}
   </div>
      </div>
    </div>
   )
}

export default PokemonDetails;
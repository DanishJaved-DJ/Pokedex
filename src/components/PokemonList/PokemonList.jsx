import axios from 'axios';
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';
import { useEffect, useState } from 'react';


function PokemonList(){
//     const [Pokedex_URl ,setPokedex_URL]=useState('https://pokeapi.co/api/v2/pokemon');
//     // const [pokemonList,setPokemonList]=useState([]);
//     const [nextUrl,setNextUrl]=useState('');
//     const [prevUrl,setPrevUrl]=useState('');
//    const [isLoading,setIsLoading]=useState(true);
const [pokemonListState,setPokemonListState]=useState({
      pokemonList:[],
      isLoading: true,
      Pokedex_URl:'https://pokeapi.co/api/v2/pokemon',
      nextUrl:'',
      prevUrl:''
})


async function downloadPokemon(){
    // setIsLoading(true);
    setPokemonListState((state)=>({...state, isLoading:true}));
    const response=await axios.get(pokemonListState.Pokedex_URl);
    // setNextUrl(response.data.next);
    setPokemonListState((state)=>({...state,
        nextUrl:response.data.next,
        prevUrl:response.data.previous
    }));
    // setPrevUrl(response.data.previous);
    const pokemonResult=response.data.results;
    const pokemonResultPromises=pokemonResult.map((pokemon)=>axios.get(pokemon.url));
    const pokemonData=await axios.all(pokemonResultPromises);
    console.log(pokemonData);
    const res=pokemonData.map((pokeData)=>{
             const pokemon=pokeData.data;
             return(
                {   
                    id:pokemon.id, 
                    name:pokemon.name,
                    image:pokemon.sprites.other.dream_world.front_default,
                    types:pokemon.types
                }
             )
    })
    console.log(res);
    // setPokemonList(res);
    setPokemonListState((state)=>({...state,
        pokemonList:res,
        isLoading:false
    }));
    // setIsLoading(false); 
}   
useEffect(()=>{
   downloadPokemon();
},[pokemonListState.Pokedex_URl]);
    return (
        <div className='pokemon-list-wrapper'>
            <div >
            </div >
            <div className='pokeList'>{(pokemonListState.isLoading)? 'Loading...': 
            pokemonListState.pokemonList.map((p)=> <Pokemon  name={p.name} image={p.image}  key={p.id} id={p.id}/>  )
            }</div>

            <div className='controls'>
                <button disabled={pokemonListState.prevUrl==null} 
                onClick={()=>setPokemonListState((state)=>({...state,Pokedex_URl:pokemonListState.prevUrl}))}>prev</button>
                <button disabled={pokemonListState.nextUrl==null}  onClick={()=>setPokemonListState((state)=>({...state,Pokedex_URl:pokemonListState.nextUrl}))}>next</button>
            </div>
        </div>
    );
}

export default PokemonList;
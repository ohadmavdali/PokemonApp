import React, { useState, useEffect } from "react";
import {
  getPokemonsApi,
  getPokemonDetailsByUrlApi,
  getPokemonsApiTotal,
} from "../api/pokemonReq";
import PokemonList from "../components/PokemonList";


export default function Home() {
  const [pokemons, setPokemons] = useState([]); 
  const [nextUrl, setNextUrl] = useState(null);
  const [load, setLoad] = useState(false);

  const [filterData, setFilterData] = useState([]);


  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);
 
  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);

      //const response = await getPokemonsApiTotal(nextUrl);

      setNextUrl(response.next);
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            //height: pokemonDetails.height,
            //weight: pokemonDetails.weight,
            image: pokemonDetails.sprites.other["official-artwork"].front_default,
          });
      }
      console.log([...pokemons]);
      console.log("--------------------------------------------");

      console.log([...pokemonsArray]);
      console.log("--------------------------");
      setPokemons([...pokemons, ...pokemonsArray]);
      setFilterData([...pokemons, ...pokemonsArray]);
      setLoad(true);
      console.log(pokemons);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
        filterData={filterData}
        setFilterData={setFilterData}
        valor={true}
        load={load}
      />
    </>

  );
}

import React, { useState, useCallback } from "react";
import { Text, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/favouriteReq";
import { getPokemonDetailsApi } from "../api/pokemonReq";

import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();

          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              height: pokemonDetails.height,
              weight: pokemonDetails.weight,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );
  return !auth ? (
    <NoLogged />
  ) : (
    <PokemonList filterData={pokemons} valor={false} load={true} />
  );

  // return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
}

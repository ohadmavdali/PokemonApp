import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Icon,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import Favorite from "../components/Favourite";



export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };


  return (
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.name}>{"Name:  " + capitalize(pokemon.name)}</Text>
            <Text style={styles.name}>{"Type:  " + (pokemon.type)}</Text>
            <Text style={styles.name}>{"Height:  " + (pokemon.height)}</Text>
            <Text style={styles.name}>{"Weight:  " + (pokemon.weight)}</Text>
            <Favorite id={pokemon?.id} ></Favorite>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 180,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingBottom:10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

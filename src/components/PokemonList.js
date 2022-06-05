import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TextInput,
  Text,
  Button,
  View,
} from "react-native";
import PokemonCard from "./PokemonCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PokemonList(props) {
  const {
    pokemons,
    loadPokemons,
    isNext,
    filterData,
    setFilterData,
    valor,
    load,
  } = props;

  const loadMore = () => {
    loadPokemons();
  };

  const [search, setSearch] = useState("");
  const [poke, setPoke] = useState(false);

  useEffect(() => {}, [search]);

  // const searchFilter = (text) => {
  //   setSearch(text);
  //   if (text) {
  //     setFilterData(pokemons);
  //   }
  // };
  const searchFilterDone = () => {
    if (search) {
      const newData = filterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilterData(newData);
      setSearch("");
      if (Object.keys(newData).length == 0) {
        setPoke(true);
      } else {
        setPoke(false);
      }
      console.log(`${Object.keys(newData).length}`);
    } else {
      setFilterData(pokemons);
      setSearch(search);
    }
  };
  const Reload = () => {
    setFilterData(pokemons);
  };

// To filter while search
  const searchFilter = (text) => {
    if (text) {
      const newData = filterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(pokemons);
      setSearch(text);
    }
  };
  return (
    <SafeAreaView>
      {valor && (
        <View style={styles.search}>
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Search Pokemon By Name"
            onChangeText={(text) => searchFilter(text)}
          />
          <Button title="Search" color="#6890f0" onPress={searchFilterDone} />
        </View>
      )}
      <FlatList
        data={filterData}
        numColumns={1}
        key={1}
        showsVerticalScrollIndicator={false} 
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && loadMore} 
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <View style={styles.list}>
            {poke && (
              <View style={styles.aviso}>
                <Text style={styles.alertaText}>
                  Could not find Pokemons with this name
                </Text>
              </View>
            )}
            {!load && (
              <View style={styles.alerta}>
                <Text style={styles.alertaText}>Loading...</Text>

                <ActivityIndicator
                  size="large"
                  style={styles.spinner}
                  color="#6890f0"
                />
              </View>
            )}
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },

  list: {
    marginBottom: 100,
  },
  alerta: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  alertaText: {
    fontSize: 17,
  },
  spinner: {
    marginTop: 20,
  },
  textInputStyle: {
    height: 40,
    margin: 12,
    marginLeft: 0,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: "60%",
  },

  search: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 25,
    height: 40,
    width: "100%",
    justifyContent: "space-evenly",
  },
  aviso: {
    width: "100%",
    height: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

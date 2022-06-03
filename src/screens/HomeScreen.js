import React, {Component} from 'react';
import {ImageBackground, Image, FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
// import height  from '../assets/constants';
import {PokemonLogo} from '../assets/Images/PokemonLogo.png';
import {Favorites} from '../assets/Images/favorites.png'
import commonStyles from '../styles/commonStyles';
import Icon from '../components/Icon';
import Input from '../components/Input';
import colors from '../assets/colors';
import Card from '../components/Card';
//import SearchBar from "../components/SearchBar";
import { useState,useEffect } from 'react';
import Search from 'react-native-search-box';



const HomeScreen = () => {
    const pokemons = [1, 2, 3, 4, 5, 6, 7];
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);


    return(
        <View>
            <Image 
                //style={styles.logoImg}
                style={{ width: 250, height: 300, left:78, resizeMode: "contain" }}
                source={require('../assets/Images/PokemonLogo.png')}
                />
            {/* <Text style={commonStyles.heading}>Pokemon Search App</Text> */}
            {/* <Icon> */}
            <Image 
                style={styles.favoritesImg}
                source={require('../assets/Images/favorites.png')}
                />
            {/* //</Icon> */}
            <Text style={styles.searchContainer}>
                {'\t'}Search for Pokemon by name{'\n'}
                or using the National Pokedex number
            </Text>
            <View style={styles.searchContainer} alignItems='center'>
            {/* <Input placeholder="What Pokémon are you looking for?"/> */}
            </View>
        {/* <View
            style={{...commonStyles.container, paddingBottom: 50, marginTop: 10}}>
            <FlatList
            contentContainerStyle={{paddingBottom: 20}}
            showsVerticalScrollIndicator={false}
            data={pokemons}
            renderItem={({item}) => <Card item={item} />}
            />
        </View> */}
        <Search
            containerStyle={{backgroundColor: 'green'}}
            inputStyle={{backgroundColor: 'white'}}
        />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    favoritesImg: {
        position: 'absolute', right: 20, bottom: 230, 
    },
    logoImg: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    searchContainer: {
        alignItems: 'center',
        position: 'absolute', right: 72, bottom: 50, 
        ...commonStyles.row,
        marginVertical: 15,
        borderRadius: 10,
        paddingLeft: 15,
    },
});


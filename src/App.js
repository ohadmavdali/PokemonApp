import { registerRootComponent } from 'expo'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from 'react-native-search-box';
import {colors, textColor} from './assets/colors';
//import SearchBar from './components/SearchBar';
//import { SearchBar } from 'react-native-search';
import {HomeScreen} from './screens/HomeScreen';


const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={textColor.white}/>
       <View style={{flex:1, backgroundColor:textColor.white}}>
        <HomeScreen />
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roberto-Black',
  },
});


export default registerRootComponent(App);
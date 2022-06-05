import { registerRootComponent } from 'expo'; 

import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from './src/navigation/Navigation';
import { AuthProvider } from "./src/context/AuthContext";


const App = () => {
  return (
    <>
       <Image 
          style={{ width: 220, height: 180, left:78,alignContent:'center', resizeMode: "contain"}}
          source={require('./src/assets/Images/PokemonLogo.png')}>
       </Image>
         <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#6890f0" barStyle="light-content" />

        <Navigation />
      </AuthProvider>
    </NavigationContainer>
    </>
  );
}

export default registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'Roberto-Black',
  },
});


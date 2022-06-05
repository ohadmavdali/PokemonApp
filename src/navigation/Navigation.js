import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoriteNavigation from "./FavoriteNavigation";
import HomeNavigation from "./HomeNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false,
        activeTintColor: "#000",
        tabBarActiveTintColor: "#6890f0",
        tabBarInactiveTintColor: "grey",
        tabBarActiveBackgroundColor: "#E8E8E8",
        tabBarInactiveBackgroundColor: "white",
        tabBarItemStyle: {
          "paddingBottom": 5,
          "paddingTop": 5
        },
        tabBarStyle: [
          {
            display: "flex"
          },
          null
        ],
      
        activeBackgroundColor: "#E8E8E8",
        activeTintColor: "#6890f0", //"#2196f3",
        inactiveTintColor: "grey",
        inactiveBackgroundColor: "white",
        tabStyle: {
          //   padding: 5,
          paddingBottom: 5, //Padding 0 here
          paddingTop: 5,
        },
        // labelStyle: {
        //   marginBottom: 10,
        // },
      }}
    >
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favorites ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}

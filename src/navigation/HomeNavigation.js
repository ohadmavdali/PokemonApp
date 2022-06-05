import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}

        options={{
          title: "Pokemon Search App",
          headerStyle: {
            backgroundColor: "#F44336",
          },

          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
        }}
      />
    </Stack.Navigator>
  );
}

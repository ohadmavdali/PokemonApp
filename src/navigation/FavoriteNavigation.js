import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/FavoriteScreen";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center", headerShadowVisible: false }}
    >
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
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

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="myAccount"
        component={AccountScreen}
        options={{
          title: "My Account",
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

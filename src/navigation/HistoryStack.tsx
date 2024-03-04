import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import History from "../screens/History";

const Stack = createNativeStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="History">
      <Stack.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;

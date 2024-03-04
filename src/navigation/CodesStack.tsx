import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Codes from "../screens/Codes";

const Stack = createNativeStackNavigator();

const CodesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Codes">
      <Stack.Screen
        name="Codes"
        component={Codes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CodesStack;

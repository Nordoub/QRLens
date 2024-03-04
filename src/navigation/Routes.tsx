import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import HistoryStack from "./HistoryStack";
import CodesStack from "./CodesStack";
import SettingsStack from "./SettingsStack";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="HistoryStack" component={HistoryStack} />
        <Tab.Screen name="CodesStack" component={CodesStack} />
        <Tab.Screen name="SettingsStack" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

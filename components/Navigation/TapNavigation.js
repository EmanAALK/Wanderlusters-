import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import ProfileDetail from "../ProfileList/ProfileDetail";
import ProfileList from "../ProfileList";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="ProfileList"
        component={ProfileList}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

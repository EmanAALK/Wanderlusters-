import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import RootNavigator from "./components/Navigation";
import TabNavigator from "./components/Navigation/TapNavigation";

//Styles
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      {/* <NavigationContainer>
        <RootNavigator />
      </NavigationContainer> */}
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

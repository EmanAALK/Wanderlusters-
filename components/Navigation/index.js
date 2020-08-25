import React from "react";
import Home from "../Home";
import TripList from "../TripList";
import QandAList from "../QandAList";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Signup"
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
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Trips" component={TripList} />
      <Screen
        name="QandAItem"
        component={QandAList}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.name,
          };
        }}
      />

      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
export default RootNavigator;

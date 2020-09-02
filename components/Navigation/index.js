import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import TripList from "../TripList";
import TripDetail from "../TripList/TripDetail";
import TripModal from "../modal/TripModal";

import CreateTripModal from "../modal/CreateTripModal";


import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import ProfileDetail from "../ProfileList/ProfileDetail";
import ProfileList from "../ProfileList";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Signin"
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

      <Screen
        name="TripList"
        component={TripList}
        options={{ headerShown: true }}
      />

      <Screen
        name="TripDetail"
        component={TripDetail}
        options={{ headerShown: true }}
      />

      <Screen
        name="TripModal"
        component={TripModal}
        options={{ headerShown: true }}
      />
      <Screen
        name="CreateTripModal"
        component={CreateTripModal}
        options={{ headerShown: true }}
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

      <Screen
        name="ProfileList"
        component={ProfileList}
        options={{ headerShown: false }}
      />

      <Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import TripList from "../TripList";
import TripDetail from "../TripList/TripDetail";
import TripModal from "../modal/TripModal";
import DiscoverList from "../DiscoverList/index";
import ProfileDetail from "../ProfileList/ProfileDetail";
import ProfileList from "../ProfileList";
import CreateTripModal from "../modal/CreateTripModal";

//Stores
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

import MyProfileBatton from "../buttons/MyProfileButton";
import SignOutButton from "../buttons/SignOutButton";
import MyTripsList from "../MyTripsList/MyTripsList";
import MyTripsDetail from "../MyTripsList/MyTripsDetail";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName='Signin'
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#fff",
          borderBottomColor: "#cea146",
        },
        headerTitleStyle: {
          letterSpacing: "2px",
          wordSpacing: "30px",
        },
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{ headerRight: () => <MyProfileBatton /> }}
        options={{ headerLeft: () => <SignOutButton /> }}
        options={{ title: "Home" }}
      />

      <Screen
        name='TripList'
        component={TripList}
        // options={{ headerShown: true }}
        options={{ headerRight: () => <MyProfileBatton /> }}
        // options={{ headerLeft: () => <SignOutButton /> }}
        options={{ title: "My Trips" }}
      />

      <Screen
        name='TripDetail'
        component={TripDetail}
        // options={{ headerShown: true }}
        options={{ headerRight: () => <MyProfileBatton /> }}
        options={{ headerLeft: () => <SignOutButton /> }}
      />

      <Screen
        name='TripModal'
        component={TripModal}
        options={{ headerShown: true }}
      />

      <Screen
        name='MyTripsList'
        component={MyTripsList}
        options={{ headerShown: true }}
      />

      <Screen
        name='MyTripsDetail'
        component={MyTripsDetail}
        options={{ headerShown: true }}
      />
      <Screen
        name='CreateTripModal'
        component={CreateTripModal}
        options={{ headerShown: true }}
      />
      <Screen
        name='Signin'
        component={Signin}
        options={{ headerShown: false }}
      />

      <Screen
        name='Signup'
        component={Signup}
        options={{ headerShown: false }}
      />

      <Screen
        name='ProfileList'
        component={ProfileList}
        // options={{ headerShown: false }}
        options={{ headerLeft: () => <SignOutButton /> }}
      />

      <Screen
        name='ProfileDetail'
        component={ProfileDetail}
        options={{ headerShown: false }}
        options={{ headerLeft: () => <SignOutButton /> }}
      />

      <Screen
        name='DiscoverList'
        component={DiscoverList}
        options={{ headerShown: false }}
        options={{ title: "Discover" }}
      />
    </Navigator>
  );
};

export default RootNavigator;

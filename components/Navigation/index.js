import React from "react";
import { observer } from "mobx-react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import TripList from "../TripList";
import TripDetail from "../TripList/TripDetail";
import EditTripForm from "../modal/EditTripForm";
import DiscoverList from "../DiscoverList/index";
import ProfileDetail from "../ProfileList/ProfileDetail";
import ProfileList from "../ProfileList";
import CreateTripForm from "../modal/CreateTripForm";
import EditProfileForm from "../modal/EditProfileForm";
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
      initialRouteName="MyTripsList"
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
      <Screen
        name="Home"
        component={Home}
        options={{ headerRight: () => <MyProfileBatton /> }}
        options={{ headerLeft: () => <SignOutButton /> }}
      />

      <Screen
        name="TripList"
        component={TripList}
        // options={{ headerShown: true }}
        options={{ headerRight: () => <MyProfileBatton /> }}
        // options={{ headerLeft: () => <SignOutButton /> }}
      />

      <Screen
        name="TripDetail"
        component={TripDetail}
        // options={{ headerShown: true }}
        options={{ headerRight: () => <MyProfileBatton /> }}
        options={{ headerLeft: () => <SignOutButton /> }}
      />

      <Screen
        name="EditTripForm"
        component={EditTripForm}
        options={{ headerShown: true }}
      />
      <Screen
        name="EditProfileForm"
        component={EditProfileForm}
        options={{ headerShown: true }}
      />
      <Screen
        name="MyTripsList"
        component={MyTripsList}
        options={{ headerShown: true }}
      />

      <Screen
        name="MyTripsDetail"
        component={MyTripsDetail}
        options={{ headerShown: true }}
      />
      <Screen
        name="CreateTripForm"
        component={CreateTripForm}
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
        // options={{ headerShown: false }}
        options={{ headerLeft: () => <SignOutButton /> }}
      />

      <Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{ headerShown: false }}
        options={{ headerLeft: () => <SignOutButton /> }}
      />

      <Screen
        name="DiscoverList"
        component={DiscoverList}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);

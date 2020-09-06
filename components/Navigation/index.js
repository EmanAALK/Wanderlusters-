import React from "react";
import { observer } from "mobx-react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import EditTripForm from "../modal/EditTripForm";
import DiscoverList from "../DiscoverList/index";
import ProfileDetail from "../ProfileList/ProfileDetail";
import ProfileList from "../ProfileList";
import CreateTripForm from "../modal/CreateTripForm";
import EditProfileForm from "../modal/EditProfileForm";
//Stores
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

import MyProfileButton from "../buttons/MyProfileButton";
import SignOutButton from "../buttons/SignOutButton";
import DiscoverDetail from "../DiscoverList/DiscoverDetail";
const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Signin"
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
        name="Home"
        component={Home}
        options={{ headerRight: () => <MyProfileButton /> }}
        options={{ headerLeft: () => <SignOutButton /> }}
        options={{ title: "Home" }}
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
        options={{ headerShown: true }}
        options={{ title: "Discover" }}
        options={{ headerRight: () => <MyProfileButton /> }}
        // options={{ headerLeft: () => <SignOutButton /> }}
      />
      <Screen
        name="DiscoverDetail"
        component={DiscoverDetail}
        options={{ headerShown: false }}
        options={{ title: "Discover" }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);

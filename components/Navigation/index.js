import React from "react";
import { observer } from "mobx-react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

//Components
import Home from "../Home";
import EditTripForm from "../modal/EditTripForm";
import DiscoverList from "../DiscoverList/index";
import ProfileDetail from "../ProfileList/ProfileDetail";
import ProfileList from "../ProfileList";
import CreateTripForm from "../modal/CreateTripForm";
import EditProfileForm from "../modal/EditProfileForm";
import splash from "../../assets/splash.png";

//Stores
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

//Buttons
import MyProfileButton from "../buttons/MyProfileButton";

import SignOutButton from "../buttons/SignOutButton";
import DiscoverDetail from "../DiscoverList/DiscoverDetail";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName='Signin'
      screenOptions={{
        headerTintColor: "#cea146",
        headerStyle: {
          backgroundColor: "#fff",
          borderBottomColor: "#f7f7f7",
          borderBottomWidth: "0.5",
          marginBottom: "40",
        },
        headerTitleStyle: {
          letterSpacing: "2px",
          wordSpacing: "30px",
        },
      }}
    >
      <Screen
        name='EditTripForm'
        component={EditTripForm}
        options={{ headerShown: true }}
      />
      <Screen
        name='EditProfileForm'
        component={EditProfileForm}
        options={{ headerShown: true }}
      />

      <Screen
        name='CreateTripForm'
        component={CreateTripForm}
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
        options={{ headerRight: () => <MyProfileButton /> }}
        options={{
          headerTitle: () => (
            <Image
              source={splash}
              alt='Logo'
              style={{ width: 65, height: 65, paddingBottom: 10 }}
            />
          ),
        }}
      />

      <Screen
        name='ProfileDetail'
        component={ProfileDetail}
        options={{ headerShown: false }}
        options={{ headerLeft: () => <SignOutButton /> }}
        options={{ headerRight: () => <MyProfileButton /> }}
        options={{
          headerTitle: () => (
            <Image
              source={splash}
              alt='Logo'
              style={{ width: 65, height: 65, paddingBottom: 10 }}
            />
          ),
        }}
      />

      <Screen
        name='DiscoverList'
        component={DiscoverList}
        options={{ headerShown: true }}
        options={{
          headerRight: () => <MyProfileButton />,
          headerTitle: () => (
            <Image
              source={splash}
              alt='Logo'
              style={{ width: 65, height: 65, paddingBottom: 10 }}
            />
          ),
        }}
      />
      <Screen
        name='DiscoverDetail'
        component={DiscoverDetail}
        options={{ headerShown: true }}
        options={{
          headerRight: () => <MyProfileButton />,
          headerTitle: () => (
            <Image
              source={splash}
              alt='Logo'
              style={{ width: 65, height: 65, paddingBottom: 10 }}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);

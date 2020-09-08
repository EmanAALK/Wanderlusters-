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

import MyProfileButton from "../buttons/MyProfileButton";
import GoToDiscoverList from "../buttons/GoToDiscoverList";

import SignOutButton from "../buttons/SignOutButton";
import DiscoverDetail from "../DiscoverList/DiscoverDetail";
const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerTintColor: "#cea146",
        headerBackAllowFontScaling: "5",
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
        // options={{ headerLeft: () => <SignOutButton /> }}
        options={{
          headerTitle: () => (
            <Image
              source={splash}
              alt="Logo"
              style={{ width: 65, height: 65, paddingBottom: 10 }}
            />
          ),
        }}
      />
      {/* changed ProfileDetail to show icon */}
      <Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{ headerShown: false }}
        options={{ headerLeft: () => <SignOutButton /> }}
      />

      {/* <Screen
         name="ProfileDetail"
         name='ProfileDetail'
         component={ProfileDetail}
         options={{ headerShown: false }}
         options={{ headerLeft: () => <SignOutButton /> }}
         options={{
           headerTitle: () => (
             <Image
               source={splash}
               alt='Logo'
               style={{ width: 65, height: 65, paddingBottom: 10 }}
             />
           ),
         }}
       /> */}

      {/* changed DiscoverList to show icon */}
      <Screen
        name="DiscoverList"
        component={DiscoverList}
        options={{ headerShown: true }}
        options={{ title: "Discover" }}
        // options={{ headerLeft: () => <SignOutButton /> }}
        options={{ headerRight: () => <MyProfileButton /> }}
      />
      {/* <Screen
         name="DiscoverList"
         name='DiscoverList'
         component={DiscoverList}
         options={{ headerShown: true }}
         options={{ title: "Discover" }}
         options={{ headerRight: () => <MyProfileButton /> }}
         // options={{ headerLeft: () => <SignOutButton /> }}
         options={{
           headerTitle: () => (
             <Image
               source={splash}
               alt='Logo'
               style={{ width: 65, height: 65, paddingBottom: 10 }}
             />
           ),
         }}
       /> */}
      <Screen
        name="DiscoverDetail"
        component={DiscoverDetail}
        options={{ headerShown: true }}
        options={{ title: "Trip Detail" }}
        options={{ headerRight: () => <GoToDiscoverList /> }}
        //   options={{
        //     headerTitle: () => (
        //       <Image
        //         source={splash}
        //         alt="Logo"
        //         style={{ width: 65, height: 65, paddingBottom: 10 }}
        //       />
        //     ),
        //   }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);

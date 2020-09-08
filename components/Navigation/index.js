import React from "react";
import { observer } from "mobx-react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import EditTripForm from "../modal/EditTripForm";
import DiscoverList from "../DiscoverList/index";
import ProfileDetail from "../ProfileList/ProfileDetail";
import CreateTripForm from "../modal/CreateTripForm";
import EditProfileForm from "../modal/EditProfileForm";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import DiscoverDetail from "../DiscoverList/DiscoverDetail";

// Buttons
import MyProfileButton from "../buttons/MyProfileButton";
import GoToDiscoverList from "../buttons/GoToDiscoverList";
import SignOutButton from "../buttons/SignOutButton";

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
        },
        headerTitleStyle: {
          letterSpacing: "2px",
          wordSpacing: "30px",
        },
      }}
    >
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
        name="ProfileDetail"
        component={ProfileDetail}
        options={
          ({ headerShown: false }, { headerLeft: () => <SignOutButton /> })
        }
      />

      <Screen
        name="DiscoverList"
        component={DiscoverList}
        options={
          ({ headerShown: true },
          { title: "Discover" },
          { headerRight: () => <MyProfileButton /> })
        }
      />

      <Screen
        name="DiscoverDetail"
        component={DiscoverDetail}
        options={
          ({ headerShown: true },
          { title: "Trip Detail" },
          { headerRight: () => <GoToDiscoverList /> })
        }
      />
    </Navigator>
  );
};

export default observer(RootNavigator);

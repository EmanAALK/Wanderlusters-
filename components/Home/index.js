import React from "react";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/AuthStore";

//Styles
import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  SignOutButton,
  SignOutButtonText,
  SignInButton,
} from "../../styles";

import { AuthOther } from "../authentication/styles";
import authStore from "../../stores/AuthStore";

import { observer } from "mobx-react";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri: "https://wallpaperaccess.com/full/1510576.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>“Wherever you go becomes a part of you somehow.”</Title>
        </TopStyling>
        <SignInButton>
          <SignOutButtonText onPress={() => navigation.navigate("Signin")}>
            Click here to Sign in!
          </SignOutButtonText>
        </SignInButton>
        <SignOutButton onPress={authStore.signout}>
          <SignOutButtonText onPress={() => navigation.navigate("Signup")}>
            Signout
          </SignOutButtonText>
        </SignOutButton>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default observer(Home);

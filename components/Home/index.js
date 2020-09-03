import React from "react";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/AuthStore";

//Styles
import {
  HomeBackground,
  OverLayContainer,
  SignOutButton,
  SignOutButtonText,
  SignInButton,
} from "./styles";

const Home = ({ navigation }) => {
  const handleSubmit = async () => {
    await authStore.signout();
    navigation.replace("Signin");
  };
  return (
    <HomeBackground
      source={{
        uri: "https://wallpaperaccess.com/full/1510576.jpg",
      }}
    >
      <OverLayContainer>
        <SignInButton>
          <SignOutButtonText onPress={() => navigation.navigate("Signin")}>
            Click here to Sign in!
          </SignOutButtonText>
        </SignInButton>
        <SignOutButton onPress={handleSubmit}>
          <SignOutButtonText>Signout</SignOutButtonText>
        </SignOutButton>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default observer(Home);

import React from "react";
import { observer } from "mobx-react";

//Styles
import {
  HomeBackground,
  OverLayContainer,
  SignOutButtonText,
  SignInButton,
} from "./styles";

const Home = ({ navigation }) => {
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
      </OverLayContainer>
    </HomeBackground>
  );
};

export default observer(Home);

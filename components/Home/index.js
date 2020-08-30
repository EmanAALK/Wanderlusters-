import React from "react";

//Styles
import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  SignOutButton,
  SignOutButtonText,
} from "../../styles";

import authStore from "../../stores/AuthStore";
import { observer } from "mobx-react";
// REVIEW: Organize the imports

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
        <SignOutButtonText onPress={() => navigation.navigate("TripList")}>
          Click here to explore trips
        </SignOutButtonText>
        <SignOutButton onPress={authStore.signout}>
          <SignOutButtonText onPress={() => navigation.navigate("Signup")}>
            Signout
          </SignOutButtonText>
        </SignOutButton>
      </OverLayContainer>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Click here to Sign in!
      </AuthOther>
    </HomeBackground>
  );
};

export default observer(Home);

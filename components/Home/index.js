import React from "react";
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
const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri: "https://wallpaperaccess.com/full/1510576.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Wonderlusters</Title>
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
    </HomeBackground>
  );
};

export default observer(Home);

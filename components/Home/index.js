import React from "react";
import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  ButtonStyled,
} from "../../styles";

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
        <ButtonStyled onPress={() => navigation.navigate("Trips")}>
          Click here to skip
        </ButtonStyled>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;

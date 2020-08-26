import React from "react";
import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
} from "../../styles";

const Home = () => {
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
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;

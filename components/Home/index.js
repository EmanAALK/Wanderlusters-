import React from "react";

//Styles
import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
} from "../../styles";

const Home = () => {
  const handleSubmit = async () => {
    await authStore.signout(user);
    if (authStore.user) navigation.replace("Home");
  };

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
      </OverLayContainer>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Click here to Sign in!
      </AuthOther>
    </HomeBackground>
  );
};

export default Home;

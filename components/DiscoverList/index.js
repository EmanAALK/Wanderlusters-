import React from "react";
import { observer } from "mobx-react";

//Components
import DiscoverItem from "./DiscoverItem";

//Media
import airplain from "../../media/airplain.png";

//Stores
import authStore from "../../stores/AuthStore";
import tripStore from "../../stores/TripStore";

//Styles

import { Container, ADDButtonStyled } from "./styles";
import { Content, Spinner, List, Text, Image, Button } from "native-base";

const DiscoverList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const loggedInUser = authStore.user;

  //For Later consideration when signing out: "an error Id of null cannot be shown because it's going,
  //search for the user that has been turn to null"

  const discoverList = tripStore.trips
    .filter((trip) => authStore.user.id !== trip.userId)
    .map((trip) => (
      <DiscoverItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <Content style={{ backgroundColor: "white" }}>
      <Container>
        <Text onPress={() => navigation.navigate("CreateTripForm")}>
          <ADDButtonStyled type="Entypo" name="aircraft-take-off" />
          {/* <Image source={{ airplain }} alt='Add' /> */}
        </Text>
      </Container>
      <List>{discoverList}</List>
    </Content>
  );
};

export default observer(DiscoverList);

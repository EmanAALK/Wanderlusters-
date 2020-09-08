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
  if (!authStore.user) return <Spinner />;

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

import React from "react";
import { observer } from "mobx-react";
import { Content, Spinner, List } from "native-base";

//Components
import DiscoverItem from "./DiscoverItem";

//Stores
import authStore from "../../stores/AuthStore";
import tripStore from "../../stores/TripStore";

//Styles
import { AddButtonStyled } from "./styles";

const DiscoverList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  //For Later consideration when signing out: "an error Id of null cannot be shown because it's going,
  //search for the user that has been turn to null"

  const discoverList = tripStore.trips
    .filter((trip) => authStore.user.id !== trip.userId)
    .map((trip) => (
      <DiscoverItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <Content>
      <AddButtonStyled onPress={() => navigation.navigate("CreateTripForm")}>
        Add Trip
      </AddButtonStyled>
      <List>{discoverList}</List>
    </Content>
  );
};

export default observer(DiscoverList);

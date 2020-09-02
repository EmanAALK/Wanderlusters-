import TripItem from "./TripItem";

import React from "react";
import { observer } from "mobx-react";
import tripStore from "../../stores/TripStore";
import { Content, Spinner, List } from "native-base";
import { AddButtonStyled } from "../../styles";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Content>
      <AddButtonStyled onPress={() => navigation.navigate("CreateTripModal")}>
        Add Trip
      </AddButtonStyled>
      <List>{tripList}</List>
    </Content>
  );
};

export default observer(TripList);

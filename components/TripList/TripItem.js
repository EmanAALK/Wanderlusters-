import React from "react";
import { ListItem } from "native-base";
import { TripItemStyled } from "../../styles";

const TripItem = ({ trip, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("QandAItem", { trip: trip })}>
      <TripItemStyled>{trip.name}</TripItemStyled>
    </ListItem>
  );
};

export default TripItem;

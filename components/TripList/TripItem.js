import React from "react";
import { observer } from "mobx-react";

//Styling
import { ListItem, Left, Right, Text } from "native-base";
import { AuthTitle } from "../authentication/styles";

const TripItem = ({ trip, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <AuthTitle>{trip.tripName}</AuthTitle>
      </Left>
    </ListItem>
  );
};

export default observer(TripItem);

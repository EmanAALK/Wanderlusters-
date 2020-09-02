import React from "react";
import { observer } from "mobx-react";

//Styling
import { ListItem, Left, Right } from "native-base";
import { AuthTitle } from "../authentication/styles";

const DiscoverItem = ({ trip, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <AuthTitle>{trip.tripName}</AuthTitle>
      </Left>
      <Right></Right>
    </ListItem>
  );
};

export default observer(DiscoverItem);

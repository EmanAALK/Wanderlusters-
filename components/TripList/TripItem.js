import React from "react";
import { observer } from "mobx-react";
import { ListItem, Left } from "native-base";
import { AuthTitle } from "../../styles";
//Styling
import { ListItem, Left, Right, Text } from "native-base";
import { AuthTitle, DeleteButtonStyled } from "../../styles";

const TripItem = ({ trip, navigation }) => {
  console.log("tripItem trip", trip);
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <AuthTitle>{trip.tripName}</AuthTitle>
      </Left>
      <Right>
        <DeleteButtonStyled onPress={() => tripStore.deleteTrip(trip.id)}>
          <Text>Delete</Text>
        </DeleteButtonStyled>
      </Right>
    </ListItem>
  );
};

export default observer(TripItem);

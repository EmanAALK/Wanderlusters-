import React from "react";
import { observer } from "mobx-react";

//Styling
import { ListItem, Left, Right, Text } from "native-base";

import { AuthTitle } from "../authentication/styles";
import { DeleteButtonStyled } from "../../styles";
import tripStore from "../../stores/TripStore";
const MyTripsItem = ({ trip, navigation }) => {
  const tripId = trip.id;
  return (
    <ListItem
      onPress={() => navigation.navigate("MyTripsDetail", { trip: trip })}
    >
      <Left>
        <AuthTitle>{trip.tripName}</AuthTitle>
      </Left>
      <Right>
        <DeleteButtonStyled onPress={() => tripStore.deleteTrip(tripId)}>
          <Text>Delete</Text>
        </DeleteButtonStyled>
      </Right>
    </ListItem>
  );
};

export default observer(MyTripsItem);

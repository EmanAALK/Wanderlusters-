import React from "react";
import { observer } from "mobx-react";

//Styling
import { ListItem, Left, Right, Text } from "native-base";
import { DeleteButtonStyled } from "../../styles";
import { AuthTitle } from "../authentication/styles";

//Stores
import tripStore from "../../stores/TripStore";
import authStore from "../../stores/AuthStore";

const TripItem = ({ trip, navigation }) => {
  // const username = authStore.user.map((user) => user.id === trip.userId);
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <AuthTitle>{trip.tripName}</AuthTitle>
      </Left>
      <Text> {username.firstName}</Text>

      <Right>
        <DeleteButtonStyled onPress={() => tripStore.deleteTrip(trip.id)}>
          <Text>Delete</Text>
        </DeleteButtonStyled>
      </Right>
    </ListItem>
  );
};

export default observer(TripItem);

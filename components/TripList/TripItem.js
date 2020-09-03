import React from "react";
import { observer } from "mobx-react";

//Styling
import { ListItem, Left, Right } from "native-base";
import { DeleteButtonStyled, TripTitle } from "./styles";

//Stores
import tripStore from "../../stores/TripStore";

const TripItem = ({ trip, navigation }) => {
  const tripId = trip.id;
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <TripTitle>{trip.tripName}</TripTitle>
      </Left>

      <Right>
        <DeleteButtonStyled onPress={() => tripStore.deleteTrip(tripId)}>
          Delete
        </DeleteButtonStyled>
      </Right>
    </ListItem>
  );
};

export default observer(TripItem);

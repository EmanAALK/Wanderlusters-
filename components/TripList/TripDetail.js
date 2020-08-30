import React from "react";
import { observer } from "mobx-react";
import { AuthTitle } from "../../styles";
import { ListItem, Left } from "native-base";
import tripStore from "../../stores/TripStore";
// REVIEW: Organize the imports

const TripDetail = ({ route }) => {
  const { trip } = route.params;
  // REVIEW: Remove commented out code if you don't need it
  // const trip = tripStore.trips.find((trip) => trip.id === tripId);
  return (
    <ListItem>
      <Left>
        <AuthTitle>{trip.tripName}</AuthTitle>

        <AuthTitle>{trip.date}</AuthTitle>
      </Left>
    </ListItem>
  );
};

export default observer(TripDetail);

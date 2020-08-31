import React from "react";
import { observer } from "mobx-react";
import { AuthTitle } from "../../styles";
import { ListItem, Left } from "native-base";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

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

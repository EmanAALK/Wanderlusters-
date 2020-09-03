import React from "react";
import { observer } from "mobx-react";

//Stores
import { TripTitle } from "./styles";

//Styles
import { ListItem, Left } from "native-base";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  return (
    <ListItem>
      <Left>
        <TripTitle>{trip.tripName}</TripTitle>
        <TripTitle>{trip.date}</TripTitle>
      </Left>
    </ListItem>
  );
};

export default observer(TripDetail);

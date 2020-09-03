import React from "react";
import { observer } from "mobx-react";
import { ListItem, Left } from "native-base";

import { AuthTitle } from "../authentication/styles";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

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

import React from "react";
import { observer } from "mobx-react";
import { ListItem, Left } from "native-base";

import { UpdateButtonStyled } from "../../styles";
import { AuthTitle } from "../authentication/styles";

const MyTripsDetail = ({ route, navigation }) => {
  const { trip } = route.params;

  return (
    <ListItem>
      <Left>
        <AuthTitle>{trip.tripName}</AuthTitle>
        <AuthTitle>{trip.date}</AuthTitle>

        <UpdateButtonStyled
          onPress={() => navigation.navigate("TripModal", { oldTrip: trip })}
        >
          Update
        </UpdateButtonStyled>
      </Left>
    </ListItem>
  );
};

export default observer(MyTripsDetail);

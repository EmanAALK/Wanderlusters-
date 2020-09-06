import React from "react";
import { observer } from "mobx-react";
import { ListItem, Left, Right } from "native-base";

import { UpdateButtonStyled } from "../ProfileList/styles";
import { AuthTitle } from "../authentication/styles";

const MyTripsDetail = ({ route, navigation }) => {
  const { trip } = route.params;

  return (
    <ListItem>
      <Right>
        <AuthTitle>{trip.tripName}</AuthTitle>
        <AuthTitle>{trip.date}</AuthTitle>
        <AuthTitle>{trip.image}</AuthTitle>

        <UpdateButtonStyled
          onPress={() => navigation.navigate("EditTripForm", { oldTrip: trip })}
        >
          Update
        </UpdateButtonStyled>
      </Right>
    </ListItem>
  );
};

export default observer(MyTripsDetail);

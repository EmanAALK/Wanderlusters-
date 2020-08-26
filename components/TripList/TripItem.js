import React from "react";
import { ListItem } from "native-base";
import { TripItemStyled } from "../../styles";

const TripItem = ({ trip, navigation }) => {
  return (
    <ListItem
      onPress={() =>
        navigation.navigate(
          "QandAItem" /* this should take you to trip detail screen */,
          { trip: trip }
        )
      }
    >
      <TripItemStyled>{trip.name}</TripItemStyled>
    </ListItem>
  );
};

export default TripItem;

import React from "react";
import { observer } from "mobx-react";

//Styling

import { ListItem, Left, Right, Text } from "native-base";




import { DeleteButtonStyled, TripTitle } from "./styles";

//Stores
import tripStore from "../../stores/TripStore";


const TripItem = ({ trip, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <TripTitle>{trip.tripName}</TripTitle>
      </Left>


      <Right>
        <DeleteButtonStyled onPress={() => tripStore.deleteTrip(tripId)}>
          Delete
          <Text>Delete</Text>
        </DeleteButtonStyled>
      </Right>

    </ListItem>
  );
};

export default observer(TripItem);

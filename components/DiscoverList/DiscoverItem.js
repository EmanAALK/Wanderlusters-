import React from "react";
import { observer } from "mobx-react";

//Styling
import { ListItem, Left, Right, Text } from "native-base";
import { DTripTitle, DeleteButtonStyled } from "./styles";
import tripStore from "../../stores/TripStore";
const DiscoverItem = ({ trip, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("DiscoverDetail", { trip: trip })}
    >
      <Left>
        <DTripTitle>{trip.tripName}</DTripTitle>
      </Left>
      <Right>
        <DeleteButtonStyled onPress={() => tripStore.deleteTrip(tripId)}>
          <Text>Delete</Text>
        </DeleteButtonStyled>
      </Right>
    </ListItem>
  );
};

export default observer(DiscoverItem);

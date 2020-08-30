import React from "react";
import { observer } from "mobx-react";
import { ListItem, Left } from "native-base";
import { AuthTitle } from "../../styles";
const TripItem = ({ trip, navigation }) => {
  console.log("tripItem trip", trip);
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <AuthTitle>{trip.tripName}</AuthTitle>
      </Left>
      {/* <UpdateButton item={item} />
      <DeleteButton itemId={item.id} /> */}
    </ListItem>
  );
};

export default observer(TripItem);

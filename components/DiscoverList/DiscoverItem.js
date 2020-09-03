import React from "react";
import { observer } from "mobx-react";

//Styling
import { ListItem, Left, Right } from "native-base";
import { DTripTitle } from "./styles";

const DiscoverItem = ({ trip, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("DiscoverDetail", { trip: trip })}
    >
      <Left>
        <DTripTitle>{trip.tripName}</DTripTitle>
      </Left>
      <Right></Right>
    </ListItem>
  );
};

export default observer(DiscoverItem);

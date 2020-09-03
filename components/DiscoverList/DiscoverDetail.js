import React from "react";
import { observer } from "mobx-react";

//Styles
import { ListItem, Left } from "native-base";
import { DTripTitle } from "./styles";

const DiscoverDetail = ({ route }) => {
  const { trip } = route.params;

  return (
    <ListItem>
      <Left>
        <DTripTitle>{trip.tripName}</DTripTitle>
        <DTripTitle>{trip.date}</DTripTitle>
      </Left>
    </ListItem>
  );
};

export default observer(DiscoverDetail);

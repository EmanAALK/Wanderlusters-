import React from "react";
import { observer } from "mobx-react";

//Styles
import { ListItem, Left, List, Text } from "native-base";
import { DTripTitle } from "./styles";
import profileStore from "../../stores/ProfileStore";
const DiscoverDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  const profile = profileStore.profiles.find(
    (profile) => profile.userId === trip.userId
  );
  return (
    <List>
      <DTripTitle
        transparent
        light
        onPress={() =>
          navigation.navigate("ProfileDetail", { profile: profile })
        }
      >
        {trip.user.username}
      </DTripTitle>
      <DTripTitle>{trip.tripName}</DTripTitle>

      <DTripTitle>{trip.date}</DTripTitle>
    </List>
  );
};

export default observer(DiscoverDetail);

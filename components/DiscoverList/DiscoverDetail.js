import React from "react";
import { observer } from "mobx-react";

//Styles
import { ListItem, Left } from "native-base";
import { DTripTitle, UpdateButtonStyled } from "./styles";
import profileStore from "../../stores/ProfileStore";
const DiscoverDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  const profile = profileStore.profiles.find(
    (profile) => profile.userId === trip.userId
  );
  return (
    <ListItem>
      <Left>
        <DTripTitle
          transparent
          light
          onPress={() =>
            navigation.navigate("ProfileDetail", { profile: profile })
          }
        >
          {trip.tripName}
        </DTripTitle>
      </Left>

      <DTripTitle>{trip.date}</DTripTitle>
    </ListItem>
  );
};

export default observer(DiscoverDetail);

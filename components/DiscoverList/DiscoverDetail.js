import React from "react";
import { observer } from "mobx-react";

//Styles

import { ListItem, Left, Content, List } from "native-base";
import { DTripTitle, DTripTitle2 } from "./styles";

import profileStore from "../../stores/ProfileStore";
const DiscoverDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  const profile = profileStore.profiles.find(
    (profile) => profile.userId === trip.userId
  );
  return (
    <Content style={{ backgroundColor: "white", marginTop: 20 }}>
      <List>
        <Left>
          <DTripTitle
            transparent
            light
            onPress={() =>
              navigation.navigate("ProfileDetail", { profile: profile })
            }
          >
            {" "}
            <DTripTitle2>username: </DTripTitle2>
            {trip.user.username}
          </DTripTitle>
        </Left>
        <Left>
          <DTripTitle2>Trip Name: </DTripTitle2>
          <DTripTitle> {trip.tripName} </DTripTitle>
        </Left>
        <Left>
          <DTripTitle2>Trip Date: </DTripTitle2>
          <DTripTitle>{trip.date}</DTripTitle>
        </Left>
        <Left>
          <DTripTitle2>Trip Image: </DTripTitle2>
          <DTripTitle>{trip.image}</DTripTitle>
        </Left>
      </List>
    </Content>
  );
};

export default observer(DiscoverDetail);

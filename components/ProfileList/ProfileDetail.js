import React from "react";
import { observer } from "mobx-react";
import {
  ListItem,
  Right,
  Left,
  List,
  Text,
  Button,
  Content,
  Thumbnail,
} from "native-base";
import defaultimage from "../../assets/defaultimage.png";
import { BlackTitle } from "./styles";
import TripItem from "../TripList/TripItem";

import tripStore from "../../stores/TripStore";

const ProfileDetail = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const { profile } = route.params;

  const profileTripList = tripStore.trips
    .filter((trip) => trip.userId === profile.userId)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <Content>
      <ListItem thumbnail>
        {/* <BlackTitle>{user.username}</BlackTitle> */}
        <Thumbnail
          source={profile.image ? { uri: profile.image } : defaultimage}
        />
        <BlackTitle>{profile.bio}</BlackTitle>
      </ListItem>
      <UpdateButtonStyled
        onPress={() =>
          navigation.navigate("EditPtofileForm", { oldprofile: profile })
        }
      >
        Edit Profile
      </UpdateButtonStyled>
      <List>{profileTripList}</List>
    </Content>
  );
};

export default observer(ProfileDetail);

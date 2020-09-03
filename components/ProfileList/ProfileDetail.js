import React from "react";
import { observer } from "mobx-react";
import { ListItem, Text, Spinner, List, Content } from "native-base";

import TripItem from "../TripList/TripItem";

import tripStore from "../../stores/TripStore";

const ProfileDetail = ({ route, navigation }) => {
  const { profile } = route.params;

  if (tripStore.loading) return <Spinner />;

  const profileTripList = tripStore.trips
    .filter((trip) => trip.userId === profile.userId)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <Content>
      <ListItem>
        <Text>{profile.bio}</Text>
      </ListItem>

      <List>{profileTripList}</List>
    </Content>
  );
};

export default observer(ProfileDetail);

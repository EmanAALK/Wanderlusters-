import React from "react";
import { observer } from "mobx-react";
import { ListItem, Left, Text, Spinner, List } from "native-base";
import profileStore from "../../stores/ProfileStore";
import tripStore from "../../stores/TripStore";

const ProfileDetail = ({ profile }) => {
  if (profileStore.loading) return <Spinner />;

  const profileTrips = tripStore.trips.filter(
    (trip) => profile.id === trip.userId
  );

  return (
    <>
      <ListItem>
        <Left>
          <Text>{profile.bio}</Text>
        </Left>
      </ListItem>
      <List>{profileTrips}</List>
    </>
  );
};

export default observer(ProfileDetail);

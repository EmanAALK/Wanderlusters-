import React from "react";
import { observer } from "mobx-react";
import { ListItem, Left, Text, Spinner } from "native-base";
import profileStore from "../../stores/ProfileStore";

const ProfileDetail = ({ route }) => {
  if (profileStore.loading) return <Spinner />;

  const { profile } = route.params;

  return (
    <ListItem>
      <Left>
        <Text>{profile.bio}</Text>
      </Left>
    </ListItem>
  );
};

export default observer(ProfileDetail);

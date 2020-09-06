import React from "react";
import { observer } from "mobx-react";

import { ListItem, Text } from "native-base";
import { ProfileItemStyled } from "./styles";

import authStore from "../../stores/AuthStore";

const ProfileItem = ({ profile, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("ProfileDetail", { profile: profile })}
    >
      {/* <Text>{user.username}</Text> */}
      <Text>{profile.bio}</Text>
    </ListItem>
  );
};

export default observer(ProfileItem);

import React from "react";
import { ListItem, Text } from "native-base";

import { ProfileItemStyled } from "./styles";

const ProfileItem = ({ profile, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("ProfileDetail", { profile: profile })}
    >
      <Text>{profile.bio}</Text>
    </ListItem>
  );
};

export default ProfileItem;

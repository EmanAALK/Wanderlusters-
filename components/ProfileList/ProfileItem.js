import React from "react";
import { ListItem } from "native-base";

import { ProfileItemStyled } from "./styles";

const ProfileItem = ({ profile, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("ProfileDetail", { profile: profile })}
    >
      <ProfileItemStyled>{profile.bio}</ProfileItemStyled>
    </ListItem>
  );
};

export default ProfileItem;

import React, { useReducer } from "react";
import { observer } from "mobx-react";

import { MyProfileButtonStyled, MyProfileTextStyled } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Text, View } from "native-base";
import profileStore from "../../stores/ProfileStore";
import authStore from "../../stores/AuthStore";

const MyProfileButton = () => {
  const navigation = useNavigation();
  if (!authStore.user) return <Text></Text>;

  const profile = profileStore.profiles.find(
    (profile) => profile.userId === authStore.user.id
  );
  return (
    <Button
      transparent
      light
      onPress={() => navigation.navigate("ProfileDetail", { profile: profile })}
    >
      <MyProfileButtonStyled type="AntDesign" name="profile" />
    </Button>
  );
};

export default observer(MyProfileButton);

import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "native-base";

import profileStore from "../../stores/ProfileStore";
import authStore from "../../stores/AuthStore";

import { MyProfileButtonStyled } from "../../styles";

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

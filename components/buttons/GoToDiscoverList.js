import React, { useReducer } from "react";
import { observer } from "mobx-react";
import { MyProfileButtonStyled, MyProfileTextStyled } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem } from "native-base";
import profileStore from "../../stores/ProfileStore";
import authStore from "../../stores/AuthStore";

const GoToDiscoverListButton = () => {
  const navigation = useNavigation();
  const profile = profileStore.profiles.find(
    (profile) => profile.userId === authStore.user.id
  );
  return (
    <Button
      transparent
      light
      onPress={() => navigation.navigate("DiscoverList")}
    >
      <MyProfileButtonStyled type="FontAwesome" name="binoculars" />
    </Button>
  );
};

export default observer(GoToDiscoverListButton);

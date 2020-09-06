import React from "react";
import { observer } from "mobx-react";
import { MyProfileButtonStyled, MyProfileTextStyled } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem } from "native-base";
import profileStore from "../../stores/ProfileStore";

const MyProfileButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      transparent
      light
      onPress={() => navigation.navigate("ProfileDetail")}
    >
      <MyProfileButtonStyled type="AntDesign" name="profile" />
    </Button>
  );
};

export default observer(MyProfileButton);

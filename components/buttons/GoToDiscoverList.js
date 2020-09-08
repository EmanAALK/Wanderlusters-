import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";

import MyProfileButtonStyled from "../../styles";

const GoToDiscoverList = () => {
  const navigation = useNavigation();

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

export default observer(GoToDiscoverList);

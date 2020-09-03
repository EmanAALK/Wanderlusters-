import React from "react";
import { observer } from "mobx-react";
import { SignOutButtonStyled } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import authStore from "../../stores/AuthStore";

const SignOutButton = () => {
  const navigation = useNavigation();
  const handleSubmit = async () => {
    await authStore.signout();
    navigation.replace("Signin");
  };
  return (
    <Button transparent light onPress={handleSubmit}>
      <SignOutButtonStyled type="MaterialCommunityIcons" name="logout" />
    </Button>
  );
};

export default observer(SignOutButton);

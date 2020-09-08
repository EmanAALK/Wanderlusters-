import React, { useState } from "react";
import { observer } from "mobx-react";

//Stores
import authStore from "../../stores/AuthStore";

//Styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
  Title,
} from "./styles";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
  };

  if (authStore.user) navigation.replace("DiscoverList");
  return (
    <AuthContainer>
      <Title>“Wherever you go becomes a part of you somehow.”</Title>
      <AuthTitle>Log in to Wanderlust</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder='Username'
        placeholderTextColor='#A6AEC1'
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder='Password'
        placeholderTextColor='#A6AEC1'
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);

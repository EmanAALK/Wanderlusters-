import React, { useState } from "react";
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "../../styles";
import authStore from "../../stores/AuthStore";
import { observer } from "mobx-react";

// organize your imports

const Signin = ({ navigation }) => {
  // add empty line
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  // add empty line
  const handleSubmit = async () => {
    // this function will not behave as expected without the await I mentioned in the authStore.
    await authStore.signin(user);
    if (authStore.user) navigation.replace("Home");
  };
  // add empty line
  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        /* the onChangeText handlers are all the same. Define a single method and reuse it here. */
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
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

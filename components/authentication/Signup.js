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
// add empty line and organize your imports
const Signup = ({ navigation }) => {
  // add empty line
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // add empty line
  const handleSubmit = async () => {
    // this function also breaks without the await in authStore
    await authStore.signiup(user);
    if (authStore.user) navigation.replace("Home");
  };
  // add empty line
  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
      <AuthTextInput
        /* the onChangeText handlers are all the same. Define a single method and reuse it here. */
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="firstName"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="lastName"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="email"
        placeholderTextColor="#A6AEC1"
      />
      {/* If this component isn't gonna be used, don't leave it here. Remove it before pushing and merging to master. */}
      {/* <AuthTextInput
        onChangeText={(profileImage) => setUser({ ...user, profileImage })}
        placeholder="email"
        placeholderTextColor="#A6AEC1"
      /> */}
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Click here to Sign in!
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signup);

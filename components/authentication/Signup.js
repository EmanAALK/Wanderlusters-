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

// clean up imports

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.replace("Home");
  };

  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
      <AuthTextInput
        // event handler is repeated
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

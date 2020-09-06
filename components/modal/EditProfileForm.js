import React, { useState } from "react";
import { observer } from "mobx-react";

//Styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "../authentication/styles";

//Stores
import profileStore from "../../stores/ProfileStore";

const EditProfileForm = ({ navigation, route }) => {
  const { oldProfile } = route.params;
  const [profile, setProfile] = useState(oldProfile);

  const handleSubmit = async () => {
    await profileStore.updateProfile(profile);
    navigation.goBack();
  };

  return (
    <AuthContainer>
      <AuthTitle>Edit Profile</AuthTitle>
      <AuthTextInput
        onChangeText={(bio) => setProfile({ ...profile, bio })}
        placeholder={oldProfile.bio}
        // value={oldProfile.bio}
        placeholderTextColor="#000"
      />
      <AuthTextInput
        onChangeText={(image) => setProfile({ ...profile, image })}
        placeholder={oldProfile.image}
        // value={oldProfile.image}
        placeholderTextColor="#000"
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Save Changes</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};
export default observer(EditProfileForm);

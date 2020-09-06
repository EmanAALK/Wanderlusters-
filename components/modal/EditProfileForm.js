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
  const [profile, setProfile] = useState({
    bio: "",
    image: "",
  });
  const handleSubmit = async () => {
    await profileStore.updateProfile(profile);
    navigation.replace("TripList");
  };

  return (
    <AuthContainer>
      <AuthTitle>Edit Profile</AuthTitle>
      <AuthTextInput
        onChangeText={(bio) => setProfile({ ...profile, bio })}
        placeholder="Bio"
        // value={profile.bio}
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(image) => setProfile({ ...profile, image })}
        placeholder="Profile Image"
        // value={profile.image}
        placeholderTextColor="#A6AEC1"
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Save Changes</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};
export default observer(EditProfileForm);

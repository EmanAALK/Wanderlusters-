import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

//Stores
import profileStore from "../../stores/ProfileStore";

//Styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "../authentication/styles";

const EditProfileForm = ({ navigation, route }) => {
  const { oldProfile } = route.params;
  const [profile, setProfile] = useState(oldProfile);

  const handleSubmit = async () => {
    let localUri = image;
    let filename = localUri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    await profileStore.updateProfile({
      ...profile,
      image: { uri: localUri, name: filename, type },
    });
    navigation.goBack();
  };
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      if (Platform.OS !== "web") {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (E) {}
  };

  return (
    <AuthContainer>
      <AuthTitle>Edit Profile</AuthTitle>
      <AuthTextInput
        onChangeText={(bio) => setProfile({ ...profile, bio })}
        placeholder="Bio"
        initialValue="1"
        placeholderTextColor="#A6AEC1"
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
      >
        <Button title="Pick profile image" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Save Changes</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};
export default observer(EditProfileForm);

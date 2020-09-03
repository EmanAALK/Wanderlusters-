import React from "react";
import { observer } from "mobx-react";
import { Spinner, Content, List } from "native-base";

// Stores
import profileStore from "../../stores/ProfileStore";

// Styles
import ProfileItem from "./ProfileItem";

//styles
import { SignOutButton, SignOutButtonText } from "../../styles";
const ProfileList = ({ navigation }) => {
  if (profileStore.loading) return <Spinner />;

  const handleSubmit = async () => {
    await authStore.signout();
    navigation.replace("Signin");
  };
  const profileList = profileStore.profiles.map((profile) => (
    <ProfileItem profile={profile} key={profile.id} navigation={navigation} />
  ));
  return (
    <Content>
      <List>{profileList}</List>
      <SignOutButton onPress={handleSubmit}>
        <SignOutButtonText>Signout</SignOutButtonText>
      </SignOutButton>
    </Content>
  );
};

export default observer(ProfileList);

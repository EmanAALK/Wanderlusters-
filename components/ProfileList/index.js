import React from "react";
import { observer } from "mobx-react";
import { Spinner, Content, List } from "native-base";

// Stores
import profileStore from "../../stores/ProfileStore";
import authStore from "../../stores/AuthStore";

// Styles
import ProfileItem from "./ProfileItem";

import { SignOutButton, SignOutButtonText } from "./styles";

const ProfileList = ({ navigation }) => {
  if (profileStore.loading) return <Spinner />;

  const profileList = profileStore.profiles.map((profile) => (
    <ProfileItem profile={profile} key={profile.id} navigation={navigation} />
  ));
  return (
    <Content>
      <List>{profileList}</List>
    </Content>
  );
};

export default observer(ProfileList);

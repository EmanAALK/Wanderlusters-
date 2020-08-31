import React from "react";
import { observer } from "mobx-react";
import { Spinner, Content, List } from "native-base";

// Stores
import profileStore from "../../stores/ProfileStore";

// Styles
import ProfileItem from "./ProfileItem";

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

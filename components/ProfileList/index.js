import React from "react";
import { observer } from "mobx-react";
import { Spinner, Content, List } from "native-base";

// Stores
import profileStore from "../../stores/ProfileStore";
import authStore from "../../stores/AuthStore";
import MyProfileButton from "../buttons/MyProfileButton";
// Styles
import ProfileDetail from "./ProfileDetail";

const ProfileList = ({ navigation }) => {
  if (profileStore.loading) return <Spinner />;

  const profileList = profileStore.profiles.map((profile) => (
    <ProfileDetail profile={profile} key={profile.id} navigation={navigation} />
  ));

  return (
    <Content style={{ backgroundColor: "white" }}>
      {/* <List>{profileList}</List> */}
    </Content>
  );
};

export default observer(ProfileList);

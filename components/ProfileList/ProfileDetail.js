import React from "react";
import { observer } from "mobx-react";
import {
  ListItem,
  List,
  Text,
  Button,
  Content,
  Thumbnail,
  Spinner,
} from "native-base";

//Components
import DiscoverItem from "../DiscoverList/DiscoverItem";

//Stores
import tripStore from "../../stores/TripStore";
import authStore from "../../stores/AuthStore";

//Styles
import { BlackTitle, TotalTrips, DTripTitle } from "./styles";
import defaultimage from "../../assets/defaultimage.png";

const ProfileDetail = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner />;
  if (!authStore.user) return <Spinner />;
  const { profile } = route.params;

  const profileTripList = tripStore.trips
    .filter((trip) => trip.userId === profile.userId)
    .map((trip) => (
      <DiscoverItem trip={trip} key={trip.id} navigation={navigation} />
    ));
  const favoriteTripList = tripStore.trips
    .filter((trip) => trip.userId === profile.userId)
    .filter((trip) => trip.favorite == true)
    .map((trip) => (
      <DiscoverItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  const NotfavoriteTripList = tripStore.trips
    .filter((trip) => trip.userId === profile.userId)
    .filter((trip) => trip.favorite == false)
    .map((trip) => (
      <DiscoverItem trip={trip} key={trip.id} navigation={navigation} />
    ));
  return (
    <Content style={{ backgroundColor: "white", marginTop: 20 }}>
      <ListItem thumbnail>
        <Thumbnail
          style={{ marginBottom: 5, marginRight: 16, textAligin: "center" }}
          source={profile.image ? { uri: profile.image } : defaultimage}
        />
      </ListItem>
      <BlackTitle>
        {profile.user.firstName} {profile.user.lastName}
      </BlackTitle>
      <BlackTitle>{profile.bio}</BlackTitle>

      <BlackTitle>@{profile.user.username}</BlackTitle>
      {profile.userId === authStore.user.id ? (
        <>
          <Button
            onPress={() =>
              navigation.navigate("EditProfileForm", { oldProfile: profile })
            }
          >
            <Text> Edit Profile</Text>
          </Button>

          <TotalTrips> Total Trips: {profileTripList.length}</TotalTrips>
        </>
      ) : (
        <TotalTrips> Total Trips: {profileTripList.length}</TotalTrips>
      )}

      <DTripTitle> My Trips</DTripTitle>

      <List>{NotfavoriteTripList}</List>
      <DTripTitle> My favorite Trips</DTripTitle>

      <List>{favoriteTripList}</List>
    </Content>
  );
};

export default observer(ProfileDetail);

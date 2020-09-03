import React from "react";
import { observer } from "mobx-react";
import { Content, Spinner, List } from "native-base";

//Components
import DiscoverItem from "./DiscoverTripItem";

//Stores
import tripStore from "../../stores/TripStore";

const DiscoverList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  //For Later consideration when signing out Id of null cannot be shown because it's going, search for the user that has been turn to null
  const discoverList = tripStore.trips
    .filter((trip) => authStore.user.id !== trip.userId)
    .map((trip) => (
      <DiscoverItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <Content>
      <List>{discoverList}</List>
    </Content>
  );
};

export default observer(DiscoverList);

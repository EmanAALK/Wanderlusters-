import React from "react";
import { observer } from "mobx-react";
import tripStore from "../../stores/TripStore";
import { Content, Spinner, List } from "native-base";
import authStore from "../../stores/AuthStore";
import MyTripsItem from "../MyTripsList/MyTripsItem";
const MyTripsList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const loggedInUser = authStore.user;

  const mytripList = tripStore.trips
    .filter((trip) => trip.userId === loggedInUser.id)
    .map((trip) => (
      <MyTripsItem trip={trip} key={trip.id} navigation={navigation} />
    ));
  // console.log(tripStore.trips.filter((trip) => trip.userId === trip.user.id));

  return (
    <Content>
      <List>{mytripList}</List>
    </Content>
  );
};

export default observer(MyTripsList);

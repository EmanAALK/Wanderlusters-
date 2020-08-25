import React from "react";
import tripStore from "../../stores/TripStore";
import TripItem from "./TripItem";
import { observer } from "mobx-react";
import { List, Spinner } from "native-base";

// create a new nailshop
const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return <List>{tripList}</List>;
};

export default observer(TripList);

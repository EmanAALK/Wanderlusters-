import TripItem from "./TripItem";

import React from "react";
import { observer } from "mobx-react";
import tripStore from "../../stores/TripStore";
import { Content, Spinner, List } from "native-base";
// REVIEW: Organize the imports

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = tripStore.trips.map((trip) => (
    // REVIEW: You don't need a fragment here. remove it please
    <>
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    </>
  ));

  return (
    <Content>
      <List>{tripList}</List>
    </Content>
  );
};

export default observer(TripList);

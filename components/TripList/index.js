import React from "react";
import { observer } from "mobx-react";

//Components
import TripItem from "./TripItem";

//Stores
import tripStore from "../../stores/TripStore";

//Styles
import { Content, Spinner, List } from "native-base";
import { AddButtonStyled, ButtonContainer } from "./styles";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (

    <Content>
      <AddButtonStyled onPress={() => navigation.navigate("CreateTripForm")}>
        Add Trip
      </AddButtonStyled>
      <List>{tripList}</List>
    </Content>

  );
};

export default observer(TripList);

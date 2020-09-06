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
    <>
      <Content>
        <List>{tripList}</List>
      </Content>
      <ButtonContainer>
        <AddButtonStyled onPress={() => navigation.navigate("CreateTripModal")}>
          Add a Trip
          {/* <Image source={require("./")} /> */}
        </AddButtonStyled>
      </ButtonContainer>
    </>
  );
};

export default observer(TripList);

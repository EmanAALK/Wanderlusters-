import React from "react";
import { observer } from "mobx-react";

//Stores
import { TripTitle } from "./styles";

//Styles
import { ListItem, Left, Button, List, Thumbnail, Image } from "native-base";
import authStore from "../../stores/AuthStore";
import { useNavigation } from "@react-navigation/native";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;

  return (
    <ListItem>
      <Left>
        <TripTitle
          transparent
          light
          onPress={() => navigation.navigate("ProfileDetail")}
        >
          {trip.tripName}
        </TripTitle>
      </Left>

      <TripTitle>{trip.date}</TripTitle>
      {/* 
      {trip.image} */}

      {/* <Right>
        <TripTitle>{user}</TripTitle>
      </Right> */}
    </ListItem>
  );
};

export default observer(TripDetail);

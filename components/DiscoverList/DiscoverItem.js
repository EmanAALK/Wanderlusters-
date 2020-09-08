import React, { useState } from "react";
import { observer } from "mobx-react";

//Styling
import { ListItem, Left, Right, Text, Image, View, Button } from "native-base";
import { DTripTitle, DeleteButtonStyled, UpdateButtonStyled } from "./styles";
import { FavortieButtonStyled } from "../../styles";
import tripStore from "../../stores/TripStore";
import authStore from "../../stores/AuthStore";

const DiscoverItem = ({ trip, navigation }) => {
  const [favorite, setFavorite] = useState(favorite);
  console.log("favorite", favorite);

  return (
    <ListItem
      onPress={() => navigation.navigate("DiscoverDetail", { trip: trip })}
    >
      {trip.userId === authStore.user.id ? (
        <>
          <Left>
            <DTripTitle>{trip.tripName}</DTripTitle>
          </Left>
          <Right>
            <DeleteButtonStyled onPress={() => tripStore.deleteTrip(trip.id)}>
              Delete
            </DeleteButtonStyled>
            <UpdateButtonStyled
              onPress={() =>
                navigation.navigate("EditTripForm", { oldTrip: trip })
              }
            >
              Update
            </UpdateButtonStyled>

            <Text onPress={() => setFavorite(!favorite)}>
              <FavortieButtonStyled type="AntDesign" name="star" />
            </Text>
          </Right>
        </>
      ) : (
        <>
          <Left>
            <DTripTitle>{trip.tripName}</DTripTitle>
          </Left>
          <Right>
            <Text>{trip.image}</Text>
          </Right>
        </>
      )}
    </ListItem>
  );
};

export default observer(DiscoverItem);

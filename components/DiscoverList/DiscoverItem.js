import React, { useState } from "react";
import { observer } from "mobx-react";
import { ListItem, Left, Right, Text } from "native-base";

import tripStore from "../../stores/TripStore";
import authStore from "../../stores/AuthStore";

//Styling
import {
  DTripTitle,
  DeleteButtonStyled,
  UpdateButtonStyled,
  FavoriteButtonStyled,
} from "./styles";

const DiscoverItem = ({ trip, navigation }) => {
  const [favorite, setFavorite] = useState(favorite);

  const handleChange = async () => {
    await tripStore.updateTrip({ ...trip, favorite: !trip.favorite });
  };

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

            <Text onPress={handleChange}>
              <FavoriteButtonStyled type="AntDesign" name="star" />
            </Text>
          </Right>
        </>
      ) : (
        <>
          <Left>
            <DTripTitle>{trip.tripName}</DTripTitle>
          </Left>
        </>
      )}
    </ListItem>
  );
};

export default observer(DiscoverItem);

import React, { useState } from "react";
import { observer } from "mobx-react";

//Styles
import {
  ModalContainer,
  ModalTitle,
  ModalTextInput,
  ModalButtonText,
  ModalButton,
} from "../../styles";

//Stores
import tripStore from "../../stores/TripStore";

const TripModal = ({ navigation, route }) => {
  const { oldTrip } = route.params;
  console.log(oldTrip);
  const [trip, setTrip] = useState(oldTrip);

  const handleSubmit = async () => {
    await tripStore.updateTrip(trip);
    if (tripStore.trip) navigation.replace("TripDetail");
  };

  return (
    <ModalContainer>
      <ModalTitle>Edit Trip</ModalTitle>
      <ModalTextInput
        onChangeText={(tripName) => setTrip({ ...trip, tripName })}
        placeholder="Trip Name"
        value={trip.tripName}
        placeholderTextColor="#A6AEC1"
      />
      <ModalTextInput
        onChangeText={(date) => setTrip({ ...trip, date })}
        placeholder="Date"
        value={trip.date}
        placeholderTextColor="#A6AEC1"
      />
      <ModalTextInput
        // event handler is repeated
        onChangeText={(description) => setTrip({ ...trip, description })}
        placeholder="Description"
        value={trip.description}
        placeholderTextColor="#A6AEC1"
      />
      <ModalTextInput
        onChangeText={(image) => setTrip({ ...trip, image })}
        placeholder="Image"
        value={trip.image}
        placeholderTextColor="#A6AEC1"
      />

      <ModalButton onPress={handleSubmit}>
        <ModalButtonText>Save Changes</ModalButtonText>
      </ModalButton>
    </ModalContainer>
  );
};

export default observer(TripModal);

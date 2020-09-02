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

const CreateTripModal = ({ navigation }) => {
  const [trip, setTrip] = useState({
    tripName: "",
    date: "",
    description: "",
    image: "",
  });

  const handleSubmit = async () => {
    await tripStore.createTrip(trip);
    navigation.replace("TripList");
  };

  return (
    <ModalContainer>
      <ModalTitle>Add Trip</ModalTitle>
      <ModalTextInput
        onChangeText={(tripName) => setTrip({ ...trip, tripName })}
        placeholder="Trip Name"
        placeholderTextColor="#A6AEC1"
      />
      <ModalTextInput
        onChangeText={(date) => setTrip({ ...trip, date })}
        placeholder="Date"
        placeholderTextColor="#A6AEC1"
      />
      <ModalTextInput
        // event handler is repeated
        onChangeText={(description) => setTrip({ ...trip, description })}
        placeholder="Description"
        placeholderTextColor="#A6AEC1"
      />
      <ModalTextInput
        onChangeText={(image) => setTrip({ ...trip, image })}
        placeholder="Image"
        placeholderTextColor="#A6AEC1"
      />

      <ModalButton onPress={handleSubmit}>
        <ModalButtonText>Save Changes</ModalButtonText>
      </ModalButton>
    </ModalContainer>
  );
};

export default observer(CreateTripModal);

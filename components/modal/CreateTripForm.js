import React, { useState } from "react";
import { observer } from "mobx-react";
import DatePicker from "react-native-datepicker";

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

const CreateTripForm = ({ navigation }) => {
  const [trip, setTrip] = useState({
    tripName: "",
    date: "",
    description: "",
    image: "",
  });

  const handleSubmit = async () => {
    console.log("check", trip.date);
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

      <DatePicker
        style={{ width: 200 }}
        date={trip.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        // minDate="2016-05-01"
        // maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          console.log("date", date);
          return setTrip({ ...trip, date });
        }}
      />

      <ModalTextInput
        // event handler is repeated
        onChangeText={(description) => setTrip({ ...trip, description })}
        placeholder="Description"
        placeholderTextColor="#A6AEC1"
      />
      {/* <ModalTextInput
        onChangeText={(image) => setTrip({ ...trip, image })}
        placeholder="Image"
        placeholderTextColor="#A6AEC1"
      /> */}

      <ModalButton onPress={handleSubmit}>
        <ModalButtonText>Save Changes</ModalButtonText>
      </ModalButton>
    </ModalContainer>
  );
};

export default observer(CreateTripForm);

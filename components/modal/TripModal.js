import React, { useState } from "react";
import { observer } from "mobx-react";
import DatePicker from "react-native-datepicker";
import moment from "moment";
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

  const [trip, setTrip] = useState(oldTrip);

  const handleSubmit = async () => {
    await tripStore.updateTrip(trip);
    navigation.replace("TripList");
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
          return setTrip({ ...trip, date });
        }}
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

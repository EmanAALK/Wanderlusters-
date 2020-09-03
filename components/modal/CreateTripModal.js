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

const CreateTripModal = ({ navigation }) => {
  const [trip, setTrip] = useState({
    tripName: "",
    date: "",
    description: "",
    image: "",
  });
  const format = moment().format("DD/MM/YYYY");


  console.log(format);

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
        // date={this.state.date}
        mode="date"
        placeholder="select date"
        format={format}
        // minDate="01/01/1990"
        // maxDate="12/12/2100"

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

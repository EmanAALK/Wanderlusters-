import React, { useState } from "react";
import { observer } from "mobx-react";
import DatePicker from "react-native-datepicker";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

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
    navigation.replace("DiscoverList");
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      console.log(pickImage);
      if (Platform.OS !== "web") {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  return (
    <ModalContainer>
      <ModalTitle>Add Your Trip</ModalTitle>
      <ModalTextInput
        onChangeText={(tripName) => setTrip({ ...trip, tripName })}
        placeholder='Trip Name'
        placeholderTextColor='#A6AEC1'
      />

      <ModalTextInput
        // event handler is repeated
        onChangeText={(description) => setTrip({ ...trip, description })}
        placeholder='Description'
        placeholderTextColor='#A6AEC1'
      />

      <DatePicker
        style={{ width: 255 }}
        date={trip.date}
        mode='date'
        placeholder='select date'
        format='YYYY-MM-DD'
        // minDate="2016-05-01"
        // maxDate="2016-06-01"
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginRight: 4,
            marginLeft: 0,
            borderColor: "#cea146",
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

      {/* <ModalTextInput
        onChangeText={(image) => setTrip({ ...trip, image })}
        placeholder="Image"
        placeholderTextColor="#A6AEC1"
      /> */}

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
      >
        <Button title='Pick an image from camera roll' onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>

      <ModalButton onPress={handleSubmit}>
        <ModalButtonText>Save Changes</ModalButtonText>
      </ModalButton>
    </ModalContainer>
  );
};

export default observer(CreateTripForm);

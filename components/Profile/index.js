import React, { useState } from "react";

// Stores
import ProfileStore from "../../stores/ProfileStore";

// Styles
import { TopStyling, Title, OverLayContainer } from "./styles";

const Profile = () => {
  const [trips, setTrips] = useState(0);

  const handleCount = () => {
    let trips = ProfileStore.profiles.trips.length;
    setTrips(trips);
  };
  return (
    <OverLayContainer>
      <TopStyling>
        <Title>{ProfileStore.profiles.nickName}</Title>
      </TopStyling>
      <Title>{ProfileStore.profiles.bio}</Title>
    </OverLayContainer>
  );
};

export default Profile;

import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const DTripTitle = styled.Text`
  color: #3a160b;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom-color: #000000;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38px;
  text-align: center;
`;

export const BlackTitle = styled.Text`
  color: black;
  font-size: 20px;
  text-align: center;
  margin-top: 0;
`;
export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const SignOutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #000000;
  margin-top: 30px;
`;

export const SignInButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: green;
  margin-top: 30px;
`;

export const SignOutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-right: 60px;
  padding-left: 60px;
`;

export const ModalTitle = styled.Text`
  color: #000000;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #000000;
`;

export const ModalTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #000000;
  border-bottom-color: #000000;
  border-bottom-width: 1px;
`;

export const ModalButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #000000;
  margin-top: 30px;
`;

export const ModalButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
export const DeleteButtonStyled = styled.Text`
  color: #3a160b;
  font-size: 12px;
`;

export const TotalTrips = styled.Text`
  color: #cea146;
  font-size: 15px;
  margin-left: 28;
  text-align: center;
`;

export const ProfileTripsStyled = styled.View`
  margin-top: 10;
`;

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

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const SignOutButton = styled.Text`
  align-self: stretch;
  align-items: center;
  padding: 20px;
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
  color: #3a160b;
  font-size: 12px;
`;

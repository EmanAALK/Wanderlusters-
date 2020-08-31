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

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
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

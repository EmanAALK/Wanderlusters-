import styled from "styled-components/native";

export const Title = styled.Text`
  color: #3a160b;
  font-size: 38;
  text-align: center;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: #3a160b;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #000000;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #000000;
  border-bottom-color: #3a160b;
  border-bottom-width: 0.5px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 12px;
  border-radius: 35px;
  background-color: #3a160b;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: #3a160b;
  margin-top: 15px;
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

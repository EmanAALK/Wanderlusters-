import styled from "styled-components/native";

export const Title = styled.Text`
  color: #cea146;
  font-size: 20px;
  margin-bottom: 80px;
  text-align: left;
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
  color: #cea146;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom-color: #000000;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #000000;
  border-bottom-color: #cea146;
  border-bottom-width: 0.5px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 12px;
  border-radius: 35px;
  background-color: #cea146;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #ffffff;
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

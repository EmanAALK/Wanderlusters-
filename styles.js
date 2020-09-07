import styled from "styled-components/native";
import { Icon, Text } from "native-base";

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
  color: #cea146;
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
  border-bottom-color: #cea146;
  border-bottom-width: 0.5px;
`;

export const ModalButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 12px;
  border-radius: 35px;
  background-color: #cea146;
  margin-top: 60px;
`;

export const ModalButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

export const DeleteButtonStyled = styled.Text`
  color: #3a160b;
  font-size: 12px;
`;
export const AddButtonStyled = styled.Text`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: green;
  margin-top: 30px;
`;

export const MyProfileButtonStyled = styled(Icon)`
  color: #000000;
  margin-right: 10px;
`;

export const MyProfileTextStyled = styled(Text)`
  color: #000000;
`;

export const SignOutButtonStyled = styled(Icon)`
  color: #000000;
  margin-right: 10px;
`;

export const SignOuteTextStyled = styled(Text)`
  color: #000000;
`;

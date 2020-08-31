import styled from "styled-components/native";

export const UpdateButtonStyled = styled.Text`
  color: #3a160b;
  font-size: 12px;
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

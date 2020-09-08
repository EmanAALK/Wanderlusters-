import styled from "styled-components/native";
import { Icon, Text } from "native-base";

export const DTripTitle = styled.Text`
  color: #3a160b;

  font-size: 20px;
  margin-bottom: 20px;
  border-bottom-color: #000000;
`;

export const DTripTitle2 = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #000000;
`;
export const ADDButtonStyled = styled(Icon)`
  color: #000000;
  margin-right: 10px;
`;
export const Container = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AddButtonStyled = styled.TouchableOpacity`
  color: #fff;
  border: #cea146;
  font-size: 12px;
  height: 30px;
  width: 30px;
  padding: 20px;
  background: #cea146;
  border-radius: 40px;
  /* box-shadow: 5px 10px 8px 10px #888888; */
`;
export const UpdateButtonStyled = styled.Text`
  color: #3a160b;
  font-size: 12px;
`;
export const DeleteButtonStyled = styled.Text`
  color: #3a160b;
  font-size: 12px;
`;

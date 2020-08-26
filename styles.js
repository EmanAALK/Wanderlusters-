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

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #fff;
`;

// export const NailShopItemStyled = styled.Text`
//   color: #000000;
//   font-size: 18;
//   margin-top: 10;
//   margin-bottom: 10;
// `;

export const TripItemStyled = styled.Text`
  color: #000000;
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
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
  color: #000000;
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
  border-bottom-color: #000000;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #000000;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: #000000;
  margin-top: 15px;
`;

// export const CheckoutButton = styled.TouchableOpacity`
//   align-self: stretch;
//   align-items: center;
//   padding: 20px;
//   background-color: #000000;
//   margin-top: 30px;
// `;
// export const CheckoutButtonText = styled.Text`
//   color: #fcfdff;
//   font-weight: bold;
//   font-size: 18px;
// `;

/**
 * Notes:
 *
 * - Remove any unused commented components. Don't leave code hanging like this.
 * - If you'll maybe use them later, don't comment them out. If you won't, delete them.
 *
 * Also, DO NOT DEFINE ALL YOUR STYLED COMPONENTS IN ONE FILE.
 * Use the structure we used in class, have a `styled.js` in each component folder.
 */

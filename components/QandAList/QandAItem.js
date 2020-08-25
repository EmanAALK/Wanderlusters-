import React, { useState } from "react";
import { observer } from "mobx-react";
// import defaultimage from "../../assets/defaultItem.jpg";
import { TripItemStyled } from "../../styles";
import { ListItem, Right, Left, Text, Button, Thumbnail } from "native-base";
import NumericInput from "react-native-numeric-input";

const QandAItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity: quantity, itemId: item.id };
    console.log("handleAdd -> newItem", newItem);
  };
  return (
    <ListItem thumbnail>
      {/* <Left>
        <Thumbnail source={item.image ? { uri: item.image } : defaultimage} />
      </Left> */}
      <Left>
        <TripItemStyled>{item.name}</TripItemStyled>
      </Left>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={1}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(QandAItem);

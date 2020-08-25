import React from "react";
import { observer } from "mobx-react";
import { Content, Spinner, List } from "native-base";
//components
import QandAItem from "./QandAItem";
//store
import qandAStore from "../../stores/QandAStore";

const QandAList = ({ route }) => {
  if (qandAStore.loading) return <Spinner />;
  const { trip } = route.params;
  const itemList = trip.items
    .map((item) => qandAStore.getItemById(item.id))
    .map((item) => <QandAItem item={item} key={item.id} />);

  return (
    <Content>
      <List>{itemList}</List>
    </Content>
  );
};

export default observer(QandAList);

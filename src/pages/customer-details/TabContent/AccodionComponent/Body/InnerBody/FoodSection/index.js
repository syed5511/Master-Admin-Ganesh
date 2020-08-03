import React from "react";

import {
  Container,
  Group,
  Image,
  Content,
  Item,
  Quantity,
  Type,
} from "./styles";

const FoodSection = ({ data }) => {
  return (
    <Container>
      {data.value.map((item) => (
        <Group key={item.key}>
          <Image />
          <Content>
            <Item>{item.item_name}</Item>
            <Quantity>{item.quantity}</Quantity>
            <Type>{item.type}</Type>
          </Content>
        </Group>
      ))}
    </Container>
  );
};

export default FoodSection;

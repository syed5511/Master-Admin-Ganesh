import React from "react";

import renderValue from "../../utils/renderValue";
import { Container, Detail, Label, Value } from "./styles";

const List = ({ list }) => {
  return (
    <Container>
      {list.map((item) => (
        <Detail key={item.label}>
          <Label>{item.label}</Label>
          <Value>{renderValue(item)}</Value>
        </Detail>
      ))}
    </Container>
  );
};

export default List;

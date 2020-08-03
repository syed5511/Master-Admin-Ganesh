import React from "react";

import { Container, Group, Label, Value } from "./styles";

const Section = ({ data }) => {
  return (
    <Container>
      {data.details.map((item) => (
        <Group key={item.key}>
          <Label>{item.label}</Label>
          <Value>{item.value}</Value>
        </Group>
      ))}
    </Container>
  );
};

export default Section;

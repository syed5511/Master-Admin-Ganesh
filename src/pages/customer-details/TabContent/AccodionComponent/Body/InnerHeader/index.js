import React from "react";

import { Container, Detail, Value, Label } from "./styles";

const InnerHeader = ({ headerList }) => {
  const renderItem = (data, type = null) => (
    <Detail key={data.key}>
      <Label>{data.label}</Label>
      <Value className={type}>{data.value}</Value>
    </Detail>
  );

  return (
    <Container>
      {headerList.map((item) => renderItem(item, item.func))}
    </Container>
  );
};

export default InnerHeader;

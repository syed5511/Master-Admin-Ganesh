import React from "react";

import {
  Container,
  Detail,
  Value,
  Label,
  ComplementaryButton,
  Items,
} from "./styles";

const Header = ({ list }) => {
  const renderItem = (data, type = null) => (
    <Detail key={data.key}>
      <Label>{data.label}</Label>
      <Value className={type}>{data.value}</Value>
    </Detail>
  );

  const renderItems = (item) => {
    switch (item.func) {
      case "outer_header":
        return renderItem(item);
      case "outer_header_orange":
        return renderItem(item, "orange");
      default:
        return null;
    }
  };

  return (
    <Container>
      <Items>{list.map(renderItems)}</Items>
      <ComplementaryButton
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        + Comp Plate
      </ComplementaryButton>
    </Container>
  );
};

export default Header;

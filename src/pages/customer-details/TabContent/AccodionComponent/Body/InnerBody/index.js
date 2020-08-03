import React from "react";

import FoodSection from "./FoodSection";
import Section from "./Section";
import { Container } from "./styles";

const InnerBody = ({ bodyList }) => {
  return (
    <Container>
      {bodyList.map((item) => {
        if (item.key === "items") {
          return <FoodSection data={item} key={item.key} />;
        }
        return <Section data={item} key={item.key} />;
      })}
    </Container>
  );
};

export default InnerBody;

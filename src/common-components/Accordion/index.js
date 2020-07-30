import React from "react";
import { arrayOf, shape, string } from "prop-types";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

import { Container } from "./styles";

const AccordionComponent = ({ list, defaultActiveKey, theme }) => {
  return (
    <Container className={theme}>
      <Accordion defaultActiveKey={defaultActiveKey}>
        {list.map((item, i) => (
          <Card key={item.cardKey}>
            <Accordion.Toggle as={Card.Header} eventKey={`${i}`}>
              {item.header()}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${i}`}>
              <Card.Body>{item.body()}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

AccordionComponent.propTypes = {
  list: arrayOf(shape({})),
  defaultActiveKey: string,
  theme: string,
};

AccordionComponent.defaultProps = {
  list: [],
  defaultActiveKey: "0",
  theme: "gray",
};

export default AccordionComponent;

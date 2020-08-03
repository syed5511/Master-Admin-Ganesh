import React, { useState } from "react";
import { arrayOf, shape, string, bool } from "prop-types";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

import { Container, Chevron } from "./styles";

const AccordionComponent = ({ list, defaultActiveKey, theme }) => {
  const [activeKey, setActiveKey] = useState({
    key: "0",
    prevKey: "-1",
  });
  return (
    <Container className={theme}>
      <Accordion defaultActiveKey={defaultActiveKey}>
        {list.map((item, i) => (
          <Card key={item.cardKey}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey={`${i}`}
              onClick={() => {
                console.log(`${i}`, activeKey.key);
                setActiveKey({
                  key: `${i}`,
                  prevKey:
                    activeKey.key === activeKey.prevKey ? "-1" : activeKey.key,
                });
              }}
            >
              {item.header()}
              {activeKey.key === `${i}` &&
              activeKey.prevKey !== activeKey.key ? (
                <Chevron className={theme} />
              ) : (
                <Chevron className={`down ${theme}`} />
              )}
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

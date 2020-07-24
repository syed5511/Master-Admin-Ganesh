import React from "react";

import { Container, Row, Col } from "./styles";

const Footer = () => (
  <Container>
    <Row>
      <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
        Master Admin Portal
      </Col>
    </Row>
  </Container>
);

export default Footer;

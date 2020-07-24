import React, { useState } from "react";
import { shape } from "prop-types";
import Form from "react-bootstrap/Form";

import {
  Container,
  Row,
  Col,
  Left,
  Logo,
  Right,
  Greet,
  Button,
} from "./styles";

const { Control } = Form;

const Header = ({ history }) => {
  const [page, setPage] = useState(history.location.pathname);
  return (
    <Container>
      <Row>
        <Col xs={12} sm={{ span: 10, offset: 1 }}>
          <Left>
            <Logo>Logo Logo</Logo>
            <Control
              as="select"
              value={page}
              onChange={(e) => {
                const val = e.target.value;
                setPage(val);
                if (val) {
                  history.push(val);
                }
              }}
            >
              <option value="">Select</option>
              <option value="/products">Products</option>
              <option value="/delivery">Delivery</option>
            </Control>
          </Left>
          <Right>
            <Greet>Hello! Syed Ikram</Greet>
            <Button theme="submit" className="logout">
              Logout
            </Button>
          </Right>
        </Col>
      </Row>
    </Container>
  );
};

Header.propTypes = {
  history: shape({}).isRequired,
};

export default Header;

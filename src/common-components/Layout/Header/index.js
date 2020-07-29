import React from "react";
import { shape, arrayOf, string, number, func } from "prop-types";
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

const Header = ({ history, pageOptions, type, pathname, page, setPage }) => {
  const renderLoginSignup = () => {
    if (pathname !== "/login") {
      return (
        <Button theme="submit" className="logout">
          Sign In
        </Button>
      );
    }
    return (
      <Button theme="submit" className="logout">
        Sign Up
      </Button>
    );
  };

  const filteredOptions = pageOptions.filter((item) => item.includeInSelect);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={{ span: 10, offset: 1 }}>
          <Left>
            <Logo>Logo Logo</Logo>
            {type === "private" && filteredOptions.length > 0 && (
              <Control
                as="select"
                value={page}
                custom
                onChange={(e) => {
                  const val = e.target.value;
                  setPage(val);
                  if (val) {
                    history.push(val);
                  }
                }}
              >
                <option value="">Select</option>
                {filteredOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </Control>
            )}
          </Left>
          <Right>
            {type === "private" ? (
              <>
                <Greet>Hello! Syed Ikram</Greet>
                <Button theme="submit" className="logout">
                  Logout
                </Button>
              </>
            ) : (
              renderLoginSignup()
            )}
          </Right>
        </Col>
      </Row>
    </Container>
  );
};

Header.propTypes = {
  history: shape({}).isRequired,
  pageOptions: arrayOf(shape({})),
  type: string.isRequired,
  pathname: string.isRequired,
  page: number.isRequired,
  setPage: func.isRequired,
};

Header.defaultProps = {
  pageOptions: [],
};

export default Header;

import React from "react";
import { Navbar, Button, NavbarBrand, Input, Col } from "reactstrap";
import Logo from "./Logo";

const Header = () => {
  return (
    <Navbar className="navbar" fixed="top">
      <NavbarBrand style={{ float: "left" }}>
        <Logo />
      </NavbarBrand>
      <Col md={2}>
        <Input type="select" name="select">
          <option>select</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </Col>
      <span style={{ float: "right" }}>
        <b>Hello Gani</b>
        <Button color="dark" size="sm" className="ml-3">
          SignOut
        </Button>
      </span>
    </Navbar>
  );
};

export default Header;

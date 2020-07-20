import React from "react";
import { node } from "prop-types";
import Col from "react-bootstrap/Col";

import Header from "./Header";
import Footer from "./Footer";
import BreadCrumbs from "../BreadCrumbs";
import { Body, Row } from "./styles";

const Layout = ({ children }) => {
  const list = [
    { text: "Products", href: "#", active: false },
    { text: "Add Product", active: true },
  ];
  return (
    <>
      <Header />
      <Row>
        <Col xs={12} sm={{ span: 8, offset: 2 }}>
          <BreadCrumbs list={list} />
          <Body>{children}</Body>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;

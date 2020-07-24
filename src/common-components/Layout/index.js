import React from "react";
import { node, shape } from "prop-types";
import Col from "react-bootstrap/Col";

import Header from "./Header";
import Footer from "./Footer";
import BreadCrumbs from "../BreadCrumbs";
import { Body, Row } from "./styles";

const Layout = ({ children, history }) => {
  const list = [
    { text: "Products", href: "#", active: false },
    { text: "Add Product", active: true },
  ];
  console.log(history);
  return (
    <>
      <Header history={history} />
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
  history: shape({}).isRequired,
};

export default Layout;

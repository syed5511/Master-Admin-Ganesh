import React, { useState } from "react";
import { node, shape, arrayOf, string } from "prop-types";
import Col from "react-bootstrap/Col";

import Header from "./Header";
import Footer from "./Footer";
import history from "../../history";
import { Body, Row } from "./styles";

const Layout = ({ children, pageOptions, publicRoutes }) => {
  const { pathname } = history.location || {};
  const [page, setPage] = useState(pathname);
  let type = "private";
  if (publicRoutes.indexOf(pathname) > -1) {
    type = "public";
  }

  return (
    <>
      <Header
        history={history}
        pageOptions={pageOptions}
        type={type}
        pathname={pathname}
        page={page}
        setPage={setPage}
      />
      <Row>
        <Col xs={12} sm={{ span: 8, offset: 2 }}>
          <Body>{children}</Body>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  pageOptions: arrayOf(shape({})),
  publicRoutes: arrayOf(string),
};

Layout.defaultProps = {
  pageOptions: [],
};

export default Layout;

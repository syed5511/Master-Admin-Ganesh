import React from "react";

import Button from "../../common-components/Button";
import { FloatingLabelContainer } from "../../common-components/common/floating-label-container";
import { Form, Row, Col } from "./styles";

const Login = () => (
  <FloatingLabelContainer>
    <Form className="form-signup">
      <div className="text-center mb-4">
        <h1 className="h3 mb-3">Sign Up</h1>
        <p>Master Admin Kitchen Portal</p>
      </div>

      <Row className="row">
        <Col className="form-label-group col-xs-12 col-sm-6 left">
          <input
            type="text"
            id="firstName"
            className="form-control"
            placeholder="First Name"
            required
          />
          <label for="firstName">First Name</label>
        </Col>

        <Col className="form-label-group col-xs-12 col-sm-6 right">
          <input
            type="text"
            id="lastName"
            className="form-control"
            placeholder="Last Name"
            required
          />
          <label for="lastName">Last Name</label>
        </Col>
      </Row>

      <div className="form-label-group">
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputEmail">Email address</label>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <label for="inputPassword">Password</label>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          placeholder="Confirm Password"
          required
        />
        <label for="confirmPassword">Confirm Password</label>
      </div>

      <Button type="submit" theme="submit" className="signup-submit">
        Sign Up
      </Button>
    </Form>
  </FloatingLabelContainer>
);

export default Login;

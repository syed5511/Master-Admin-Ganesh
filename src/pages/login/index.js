import React from "react";

import Button from "../../common-components/Button";
import { FloatingLabelContainer } from "../../common-components/common/floating-label-container";
import { Form } from "./styles";

const Login = () => (
  <FloatingLabelContainer>
    <Form className="form-signin">
      <div className="text-center mb-4">
        <h1 className="h3 mb-3">Sign In</h1>
        <p>Master Admin Kitchen Portal</p>
      </div>

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

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <Button type="submit" theme="submit" className="login-submit">
        Sign in
      </Button>
    </Form>
  </FloatingLabelContainer>
);

export default Login;

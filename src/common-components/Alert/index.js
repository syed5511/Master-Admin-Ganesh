import React from "react";
import { func, bool, string, node } from "prop-types";
import Alert from "react-bootstrap/Alert";

const AlertComponent = ({ setShow, dismissible, theme, heading, children }) => {
  return (
    <Alert
      variant={theme}
      onClose={() => setShow(false)}
      dismissible={dismissible}
    >
      {heading && <Alert.Heading>{heading}</Alert.Heading>}
      {children}
    </Alert>
  );
};

AlertComponent.propTypes = {
  setShow: func,
  dismissible: bool,
  theme: string,
  heading: string,
  children: node.isRequired,
};

AlertComponent.defaultProps = {
  setShow: () => {},
  dismissible: false,
  theme: "success",
  heading: null,
};

export default AlertComponent;

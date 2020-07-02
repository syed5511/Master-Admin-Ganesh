import React from "react";
import { Alert } from "reactstrap";

const ErrorAlert = ({ label }) => {
  return (
    <Alert color="danger" className="danger px-5 py-0 ml-1">
      <span className="alert-link">{label}</span>
    </Alert>
  );
};

export default ErrorAlert;

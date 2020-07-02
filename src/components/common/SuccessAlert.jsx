import React from "react";
import { Alert } from "reactstrap";

const SuccessAlert = ({ label }) => {
  return (
    <Alert color="success" className="success px-5 py-0 ml-1">
      <span className="alert-link">{label}</span>
    </Alert>
  );
};

export default SuccessAlert;

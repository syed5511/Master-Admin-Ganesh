import React from "react";
import { shape, string } from "prop-types";
import BForm from "react-bootstrap/Form";

import Field from "./Field";
import { GridCol, Label } from "./styles";

const {
  Control: { Feedback },
} = BForm;

const FormControl = ({ col, label, ...rest }) => {
  return (
    <GridCol xs={12} sm={6} {...col}>
      {label && <Label>{label}</Label>}
      <Field {...rest} />
      <Feedback type="invalid">{rest.name} is required</Feedback>
    </GridCol>
  );
};

FormControl.propTypes = {
  col: shape({}),
  label: string,
};

FormControl.defaultProps = {
  col: {},
  label: null,
};

export default FormControl;

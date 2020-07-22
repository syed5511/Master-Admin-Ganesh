import React from "react";
import { shape, string } from "prop-types";

import Field from "./Field";
import { GridCol, Label } from "./styles";

const FormControl = ({ col, label, ...rest }) => {
  return (
    <GridCol xs={12} sm={6} {...col}>
      {label && <Label>{label}</Label>}
      <Field {...rest} />
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

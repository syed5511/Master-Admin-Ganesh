import React from "react";
import { shape, string, bool } from "prop-types";
import BForm from "react-bootstrap/Form";

import Field from "./Field";
import { GridCol, Label, Group } from "./styles";

const {
  Control: { Feedback },
} = BForm;

const FormControl = ({ col, label, inline, inlineHalf, ...rest }) => {
  const className = [];
  if (inlineHalf) {
    className.push("inlineHalf");
  }
  if (inline) {
    className.push("inline");
  }
  return (
    <GridCol xs={12} sm={6} {...col}>
      <Group className={className}>
        {label && <Label>{label}</Label>}
        <Field {...rest} />
      </Group>
      <Feedback type="invalid">{rest.name} is required</Feedback>
    </GridCol>
  );
};

FormControl.propTypes = {
  col: shape({}),
  label: string,
  inline: bool,
  inlineHalf: bool,
};

FormControl.defaultProps = {
  col: {},
  label: null,
  inline: false,
  inlineHalf: false,
};

export default FormControl;

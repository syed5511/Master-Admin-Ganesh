import React from "react";
import { shape, string, bool } from "prop-types";

import Field from "./Field";
import { GridCol, Label, Group, Error } from "./styles";

const FormControl = ({ col, label, inline, inlineHalf, error, ...rest }) => {
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
      {error && <Error>{error}</Error>}
    </GridCol>
  );
};

FormControl.propTypes = {
  col: shape({}),
  label: string,
  inline: bool,
  inlineHalf: bool,
  error: string,
};

FormControl.defaultProps = {
  col: {},
  label: null,
  inline: false,
  inlineHalf: false,
  error: undefined,
};

export default FormControl;

import React from "react";
import { string, shape, func, bool } from "prop-types";
import Form from "react-bootstrap/Form";

import { ControlContainer } from "../../styles";

const { Control } = Form;

const TextAreaControl = ({
  name,
  values,
  placeholder,
  disabled,
  setValues,
  setErrors,
  error,
  errors,
}) => (
  <ControlContainer className={error ? "error" : ""}>
    <Control
      name={name}
      as="textarea"
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => {
        setErrors({
          ...errors,
          [name]: null,
        });
        setValues({ ...values, [name]: e.target.value });
      }}
      value={values[name]}
    />
  </ControlContainer>
);

TextAreaControl.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  disabled: bool,
  error: string,
};

TextAreaControl.defaultProps = {
  disabled: false,
  error: null,
};

export default TextAreaControl;

import React from "react";
import { string, shape, func, bool } from "prop-types";
import Form from "react-bootstrap/Form";
const { Control } = Form;

const InputControl = ({
  name,
  inputType,
  placeholder,
  values,
  disabled,
  required,
  setValues,
}) => (
  <Control
    name={name}
    type={inputType}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
    onChange={(e) => {
      setValues({ ...values, [name]: e.target.value });
    }}
    value={values[name]}
  />
);

InputControl.propTypes = {
  inputType: string,
  required: bool,
  name: string.isRequired,
  placeholder: string,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  disabled: bool,
};

InputControl.defaultProps = {
  inputType: "text",
  placeholder: "Enter",
  disabled: false,
  required: false,
};

export default InputControl;

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
  setValues,
}) => (
  <Control
    name={name}
    type={inputType}
    placeholder={placeholder}
    disabled={disabled}
    onChange={(e) => {
      setValues({ ...values, [name]: e.target.value });
    }}
    value={values[name]}
  />
);

InputControl.propTypes = {
  inputType: string,
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
};

export default InputControl;

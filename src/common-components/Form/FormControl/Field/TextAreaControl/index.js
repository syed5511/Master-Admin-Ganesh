import React from "react";
import { string, shape, func, bool } from "prop-types";
import Form from "react-bootstrap/Form";
const { Control } = Form;

const TextAreaControl = ({
  name,
  values,
  placeholder,
  disabled,
  setValues,
}) => (
  <Control
    name={name}
    as="textarea"
    placeholder={placeholder}
    disabled={disabled}
    onChange={(e) => {
      setValues({ ...values, [name]: e.target.value });
    }}
    value={values[name]}
  />
);

TextAreaControl.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  disabled: bool,
};

TextAreaControl.defaultProps = {
  disabled: false,
};

export default TextAreaControl;

import React from "react";
import { string, shape, bool, arrayOf, func } from "prop-types";
import Form from "react-bootstrap/Form";
const { Control } = Form;

const SelectControl = ({
  name,
  values,
  multiple,
  options,
  disabled,
  setValues,
  required,
}) => (
  <Control
    name={name}
    as="select"
    multiple={multiple}
    disabled={disabled}
    required={required}
    onChange={(e) => {
      setValues({ ...values, [name]: e.target.value });
    }}
    value={values[name]}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </Control>
);

SelectControl.propTypes = {
  name: string.isRequired,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  required: bool,
  multiple: bool,
  disabled: bool,
  options: arrayOf(shape({})),
};

SelectControl.defaultProps = {
  multiple: false,
  options: [],
  required: false,
  disabled: false,
};

export default SelectControl;

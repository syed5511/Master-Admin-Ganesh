import React from "react";
import { string, shape, func, bool } from "prop-types";
import Form from "react-bootstrap/Form";
const { Check } = Form;

const CheckboxGroupControl = ({
  name,
  values,
  disabled,
  required,
  setValues,
  options,
  ...rest
}) => (
  <>
    {options.map((option) => (
      <Check
        key={option.label}
        disabled={disabled || option.disabled}
        type="checkbox"
        label={option.label}
        id={option.id || option.label}
        required={required}
        checked={(values[name] || []).indexOf(option.value) > -1}
        onChange={(e) => {
          if (e.target.checked) {
            setValues({
              ...values,
              [name]: [...(values[name] || []), e.target.value],
            });
          } else {
            setValues({
              ...values,
              [name]: (values[name] || []).filter(
                (item) => item !== e.target.value
              ),
            });
          }
        }}
        value={option.value}
        {...rest}
      />
    ))}
  </>
);

CheckboxGroupControl.propTypes = {
  required: bool,
  name: string.isRequired,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  disabled: bool,
};

CheckboxGroupControl.defaultProps = {
  disabled: false,
  required: false,
};

export default CheckboxGroupControl;

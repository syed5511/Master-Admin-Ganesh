import React from "react";
import { string, shape, func, bool } from "prop-types";
import Form from "react-bootstrap/Form";

import { ControlContainer } from "../../styles";

const { Check } = Form;

const CheckboxGroupControl = ({
  name,
  values,
  disabled,
  setValues,
  options,
  setErrors,
  error,
  errors,
  ...rest
}) => (
  <ControlContainer className={error ? "error" : ""}>
    {options.map((option) => (
      <Check
        key={option.label}
        disabled={disabled || option.disabled}
        type="checkbox"
        label={option.label}
        id={option.id || option.label}
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
          setErrors({
            ...errors,
            [name]: null,
          });
        }}
        value={option.value}
        {...rest}
      />
    ))}
  </ControlContainer>
);

CheckboxGroupControl.propTypes = {
  name: string.isRequired,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  disabled: bool,
};

CheckboxGroupControl.defaultProps = {
  disabled: false,
};

export default CheckboxGroupControl;

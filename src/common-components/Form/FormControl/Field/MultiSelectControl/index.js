import React from "react";
import { string, shape, bool, arrayOf, func } from "prop-types";

import { Container } from "./styles";

const MultiSelectControl = ({
  name,
  values,
  options,
  disabled,
  setValues,
  required,
}) => {
  return (
    <Container>
      <select
        name={name}
        disabled={disabled}
        required={required}
        multiple
        className="selectpicker"
        data-live-search="true"
        onChange={(e) => {
          if ((values[name] || []).find((item) => item === e.target.value)) {
            setValues({
              ...values,
              [name]: (values[name] || []).filter(
                (item) => item !== e.target.value
              ),
            });
          } else {
            setValues({
              ...values,
              [name]: [...(values[name] || []), e.target.value],
            });
          }
        }}
        value={values[name]}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

MultiSelectControl.propTypes = {
  name: string.isRequired,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  required: bool,
  disabled: bool,
  options: arrayOf(shape({})),
};

MultiSelectControl.defaultProps = {
  options: [],
  required: false,
  disabled: false,
};

export default MultiSelectControl;

import React from "react";
import { string, shape, func, bool } from "prop-types";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { ControlContainer } from "../../styles";

const { Control } = Form;
const { Prepend, Text } = InputGroup;

const InputControl = ({
  name,
  inputType,
  placeholder,
  values,
  disabled,
  setValues,
  prefix,
  valueRegex,
  setErrors,
  errors,
  error,
}) => {
  const renderInputControl = () => (
    <ControlContainer className={error ? "error" : ""}>
      <Control
        name={name}
        type={inputType}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          let val = e.target.value;
          if (valueRegex) {
            val =
              (val.match(valueRegex) || [])[0] ||
              (!val ? "" : values[name] || "");
          }
          setErrors({
            ...errors,
            [name]: null,
          });
          setValues({
            ...values,
            [name]: val,
          });
        }}
        value={values[name]}
      />
    </ControlContainer>
  );

  if (!prefix) {
    return renderInputControl();
  }
  return (
    <InputGroup>
      <Prepend>
        <Text>{prefix}</Text>
      </Prepend>
      {renderInputControl()}
    </InputGroup>
  );
};

InputControl.propTypes = {
  inputType: string,
  name: string.isRequired,
  placeholder: string,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  disabled: bool,
  prefix: string,
  valueRegex: string,
  setErrors: func,
  error: string,
};

InputControl.defaultProps = {
  inputType: "text",
  placeholder: "Enter",
  disabled: false,
  prefix: null,
  valueRegex: null,
  error: null,
  setErrors: () => {},
};

export default InputControl;

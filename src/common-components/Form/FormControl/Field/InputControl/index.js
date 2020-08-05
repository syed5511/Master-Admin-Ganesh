import React from "react";
import { string, shape, func, bool } from "prop-types";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const { Control } = Form;
const { Prepend, Text } = InputGroup;

const InputControl = ({
  name,
  inputType,
  placeholder,
  values,
  disabled,
  required,
  setValues,
  prefix,
  valueRegex,
}) => {
  const renderInputControl = () => (
    <Control
      name={name}
      type={inputType}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      onChange={(e) => {
        let val = e.target.value;
        if (valueRegex) {
          val =
            (val.match(valueRegex) || [])[0] ||
            (!val ? "" : values[name] || "");
        }
        setValues({
          ...values,
          [name]: val,
        });
      }}
      value={values[name]}
    />
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
  required: bool,
  name: string.isRequired,
  placeholder: string,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  disabled: bool,
  prefix: string,
  valueRegex: string,
};

InputControl.defaultProps = {
  inputType: "text",
  placeholder: "Enter",
  disabled: false,
  required: false,
  prefix: null,
  valueRegex: null,
};

export default InputControl;

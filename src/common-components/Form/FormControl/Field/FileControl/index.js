import React from "react";
import { string, shape, func, bool } from "prop-types";
import Form from "react-bootstrap/Form";

import { SelectedFile, ControlContainer } from "../../styles";

const { File } = Form;

const FormControl = ({
  name,
  placeholder,
  values,
  disabled,
  setValues,
  fileButtonText,
  setErrors,
  error,
  errors,
  ...rest
}) => (
  <ControlContainer className={error ? "error" : ""}>
    <File
      name={name}
      label={placeholder}
      data-browse={fileButtonText}
      disabled={disabled}
      onChange={(e) => {
        setErrors({
          ...errors,
          [name]: null,
        });
        setValues({ ...values, [name]: [...e.target.files] });
      }}
      custom
      {...rest}
    />
    {(values[name] || []).length > 0 && (
      <SelectedFile>{values[name].map((f) => f.name).join(", ")}</SelectedFile>
    )}
  </ControlContainer>
);

FormControl.propTypes = {
  name: string.isRequired,
  placeholder: string,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  disabled: bool,
  fileButtonText: string,
  error: string,
};

FormControl.defaultProps = {
  placeholder: "Select file",
  disabled: false,
  fileButtonText: "Browse",
  error: null,
};

export default FormControl;

import React from "react";
import { string, shape, func, bool } from "prop-types";
import Form from "react-bootstrap/Form";

import { SelectedFile } from "../../styles";

const { File } = Form;

const FormControl = ({
  name,
  placeholder,
  values,
  disabled,
  required,
  setValues,
  fileButtonText,
  ...rest
}) => (
  <>
    <File
      name={name}
      label={placeholder}
      data-browse={fileButtonText}
      disabled={disabled}
      required={required}
      onChange={(e) => {
        setValues({ ...values, [name]: [...e.target.files] });
      }}
      // value={values[name]}
      custom
      {...rest}
    />
    {(values[name] || []).length > 0 && (
      <SelectedFile>{values[name].map((f) => f.name).join(", ")}</SelectedFile>
    )}
  </>
);

FormControl.propTypes = {
  required: bool,
  name: string.isRequired,
  placeholder: string,
  values: shape({}).isRequired,
  setValues: func.isRequired,
  disabled: bool,
  fileButtonText: string,
};

FormControl.defaultProps = {
  placeholder: "Select file",
  disabled: false,
  required: false,
  fileButtonText: "Browse",
};

export default FormControl;

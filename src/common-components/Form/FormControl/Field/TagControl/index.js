import React from "react";
import { func } from "prop-types";

import InputTag from "./InputTag";

const TagControl = (fieldProps) => {
  const {
    name,
    placeholder,
    values,
    error,
    disabled,
    setValues,
    isSimple,
    eventKey,
    eventKeyName,
    setErrors,
    errors,
  } = fieldProps;
  return (
    <InputTag
      placeholder={placeholder}
      value={values[name]}
      name={name}
      onChange={(v) => {
        setValues({ ...values, [name]: v });
        setErrors({
          ...errors,
          [name]: null,
        });
      }}
      error={error}
      disabled={disabled}
      isSimple={isSimple}
      eventKey={eventKey}
      eventKeyName={eventKeyName}
    />
  );
};

TagControl.propTypes = {
  setErrors: func,
};

TagControl.defaultProps = {
  setErrors: () => {},
};

export default TagControl;

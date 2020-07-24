import React from "react";

import InputTag from "./InputTag";

const TagControl = (fieldProps) => {
  const {
    name,
    placeholder,
    values,
    message,
    disabled,
    setValues,
    isSimple,
    eventKey,
    eventKeyName,
  } = fieldProps;
  return (
    <InputTag
      placeholder={placeholder}
      value={values[name]}
      name={name}
      onChange={(v) => setValues({ ...values, [name]: v })}
      message={message}
      disabled={disabled}
      isSimple={isSimple}
      eventKey={eventKey}
      eventKeyName={eventKeyName}
    />
  );
};

export default TagControl;

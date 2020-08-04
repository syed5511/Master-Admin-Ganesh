import React from "react";
import { string } from "prop-types";

import InputControl from "./InputControl";
import SelectControl from "./SelectControl";
import TextAreaControl from "./TextAreaControl";
import FileControl from "./FileControl";
import StaticControl from "./StaticControl";
import TagControl from "./TagControl";
import CheckboxGroupControl from "./CheckboxGroupControl";

const Field = ({ type, mode, ...rest }) => {
  if (mode === "preview") {
    return <StaticControl {...rest} />;
  }
  switch (type) {
    case "input":
      return <InputControl {...rest} />;
    case "textarea":
      return <TextAreaControl {...rest} />;
    case "tags":
      return <TagControl {...rest} />;
    case "file":
      return <FileControl {...rest} />;
    case "select":
      return <SelectControl {...rest} />;
    case "checkbox-group":
      return <CheckboxGroupControl {...rest} />;
    case "static":
      return <StaticControl {...rest} />;
    default:
      return null;
  }
};

Field.propTypes = {
  type: string.isRequired,
  mode: string.isRequired,
};

export default Field;

import React from "react";

import { Value } from "./styles";

const StaticControl = ({ name, values, type }) => {
  console.log("name", name, values, type);
  if (type === "file") {
    return (
      <Value>{(values[name] || []).map((item) => item.name).join(", ")}</Value>
    );
  }
  if (type === "multi-select") {
    return (
      <Value>{(values[name] || []).map((item) => item.label).join(", ")}</Value>
    );
  }
  if (type === "select") {
    return <Value>{(values[name] || []).label}</Value>;
  }
  return <Value>{values[name] || "-"}</Value>;
};

export default StaticControl;

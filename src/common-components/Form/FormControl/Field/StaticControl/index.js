import React from "react";

import { Value } from "./styles";

const StaticControl = ({ name, values }) => {
  if (name.includes("image")) {
    return (
      <Value>{(values[name] || []).map((item) => item.name).join(", ")}</Value>
    );
  }
  return <Value>{values[name] || "-"}</Value>;
};

export default StaticControl;

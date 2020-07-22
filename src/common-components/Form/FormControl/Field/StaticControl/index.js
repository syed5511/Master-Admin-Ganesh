import React from "react";

import { Value } from "./styles";

const StaticControl = ({ name, values }) => (
  <Value>{values[name] || "-"}</Value>
);

export default StaticControl;

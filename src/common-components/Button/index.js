import React from "react";
import { string, func, node } from "prop-types";

import { BButton } from "./styles";

const Button = ({ type, theme, onClick, children, className, ...rest }) => (
  <BButton
    {...rest}
    type={type}
    onClick={onClick}
    className={`${theme} ${className}`}
  >
    {children}
  </BButton>
);

Button.propTypes = {
  type: string,
  theme: string,
  onClick: func,
  className: string,
  children: node.isRequired,
};

Button.defaultProps = {
  type: "button",
  theme: "cancel",
  className: "",
  onClick: () => {},
};

export default Button;

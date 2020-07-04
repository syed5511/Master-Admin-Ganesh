import React, { useState } from "react";

const ButtonComponent = ({ onClick, label, icon, type }) => {
  const [className] = useState(`button ${type}`);
  return (
    <div>
      <button className={className} onClick={onClick}>
        {icon && icon}
        {label}
      </button>
    </div>
  );
};

export default ButtonComponent;

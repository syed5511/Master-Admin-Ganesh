import React, { useState } from "react";

const ButtonComponent = ({ handleClick, label, icon, type }) => {
  const [className] = useState(`button ${type}`);
  return (
    <div>
      <button className={className} onClick={handleClick}>
        {icon && icon}
        {label}
      </button>
    </div>
  );
};

export default ButtonComponent;

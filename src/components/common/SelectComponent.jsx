import React, { useState } from "react";
import Select from "react-select";

const SelectComponent = ({ type, options, handleChange, Placeholder }) => {
  const [className] = useState(`Select ${type}`);

  return (
    <div>
      <Select
        className={className}
        // value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder={Placeholder}
      />
    </div>
  );
};

export default SelectComponent;

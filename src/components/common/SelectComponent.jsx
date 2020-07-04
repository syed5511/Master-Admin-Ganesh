import React, { useState } from "react";
import Select from "react-select";

const SelectComponent = ({ type, options, onChange, Placeholder }) => {
  const [className] = useState(`Select ${type}`);

  return (
    <div>
      <Select
        className={className}
        // value={selectedOption}
        onChange={onChange}
        options={options}
        placeholder={Placeholder}
      />
    </div>
  );
};

export default SelectComponent;

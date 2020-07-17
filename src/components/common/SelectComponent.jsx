import React, { useState } from "react";

import Select from "react-select";

const SelectComponent = ({ type, options, onChange, Placeholder }) => {
  const [className] = useState(`Select ${type}`);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#9e9e9e",
      minHeight: "30px",
      height: "30px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "30px",
      padding: "0 6px",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "30px",
    }),
  };

  return (
    <Select
      className={className}
      // value={selectedOption}
      onChange={onChange}
      options={options}
      placeholder={Placeholder}
      styles={customStyles}
    />
  );
};

export default SelectComponent;

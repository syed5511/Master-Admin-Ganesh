import React from "react";

const SearchComponent = ({ type, placeholder }) => {
  return (
    <div>
      <span className="fa fa-search form-control-feedback"></span>
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        style={{ height: "30px" }}
      />
    </div>
  );
};

export default SearchComponent;

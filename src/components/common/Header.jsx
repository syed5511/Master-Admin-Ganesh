import React, { useState } from "react";
import { Button } from "reactstrap";
import Logo from "./Logo";
import SelectComponent from "./SelectComponent";

const Header = () => {
  const [options] = useState([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]);
  const [selectedOption] = useState(null);

  const handleChange = () => {
    return selectedOption;
  };
  return (
    <nav className="navbar fixed-top navbar-expand-md">
      <div className="collapse navbar-collapse">
        <span className="navbar-brand ml-5">
          <Logo />
        </span>

        <SelectComponent
          type="slct"
          options={options}
          value={selectedOption}
          onChange={handleChange}
          Placeholder="Select"
        />
      </div>

      <span className="mr-5" style={{ float: "left" }}>
        <b
          style={{
            font: "Semibold 22px/30px Segoe UI",
            letterSpacing: "0px",
            color: "#000000",
            opacity: "1",
          }}
        >
          Hello Syed Ikram
        </b>
        <Button
          color="dark"
          size="sm"
          className="ml-3"
          style={{
            width: "80px",
            height: "30px",
            boxShadow: "0px 11px 16px #20275669",
          }}
        >
          Logout
        </Button>
      </span>
    </nav>
  );
};

export default Header;

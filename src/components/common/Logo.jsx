import React from "react";
import logo from "../../logo.svg";

const Logo = () => {
  return (
    <div>
      <span>
        <b
          style={{
            font: "Semibold 22px/30px Segoe UI",
          }}
        >
          Logo
        </b>
        <img src={logo} className="App-logo" alt="logo" />
      </span>
    </div>
  );
};

export default Logo;

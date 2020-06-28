import React from "react";
import { Button } from "reactstrap";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md">
      <div className="collapse navbar-collapse">
        <span className="navbar-brand ml-5">
          <Logo />
        </span>

        <select className="select" type="select" name="select">
          <option>select</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
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
          style={{ width: "80px", height: "30px" }}
        >
          Logout
        </Button>
      </span>
    </nav>
  );
};

export default Header;

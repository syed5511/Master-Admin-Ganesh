import React, { useState } from "react";
import { Button } from "reactstrap";
import Logo from "./Logo";
import SelectComponent from "./SelectComponent";
import { useHistory, withRouter } from "react-router-dom";

const Header = () => {
  const [options] = useState([
    { value: "products", label: "ProductList" },
    { value: "products/addproduct", label: "AddProduct" },
    { value: "delivery", label: "DeliveryList" },
  ]);
  const [selectedOption] = useState(null);
  const history = useHistory();

  const handleChange = (e) => {
    history.push(`/${e.value}`);
    console.log(e.value);
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

export default withRouter(Header);

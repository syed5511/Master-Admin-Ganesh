import React from "react";
import { Container, LeftLabel } from "./styles";

const renderValue = (item) => {
  switch (item.func) {
    case "renderStatusSwitch":
      return (
        <Container>
          <LeftLabel htmlFor="customSwitches">Off</LeftLabel>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitches"
              readOnly
            />
            <label className="custom-control-label" htmlFor="customSwitches">
              On
            </label>
          </div>
        </Container>
      );
    default:
      return item.value;
  }
};

export default renderValue;

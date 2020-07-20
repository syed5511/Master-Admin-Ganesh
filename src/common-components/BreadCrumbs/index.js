import React from "react";
import { arrayOf, shape } from "prop-types";

import { BreadCrumb, Item } from "./styles";

const BreadCrumbs = ({ list }) => (
  <BreadCrumb>
    {list.map((item) => {
      const { text, ...rest } = item;
      return <Item {...rest}>{text}</Item>;
    })}
  </BreadCrumb>
);

BreadCrumbs.propTypes = {
  list: arrayOf(shape({})).isRequired,
};

export default BreadCrumbs;

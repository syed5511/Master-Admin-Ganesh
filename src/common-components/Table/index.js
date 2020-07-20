import React from "react";
import { arrayOf, shape, string, oneOfType, bool } from "prop-types";

import renderItem from "./renderItem";
import { BTable, THead } from "./styles";

const Table = ({
  cols,
  list,
  hover,
  responsive,
  borderless,
  bordered,
  size,
  striped,
  variant,
  bsPrefix,
}) => (
  <BTable
    hover={hover}
    responsive={responsive}
    borderless={borderless}
    bordered={bordered}
    size={size}
    striped={striped}
    variant={variant}
    bsPrefix={bsPrefix}
  >
    <THead>
      <tr>
        {cols.map((item) => (
          <th key={item.key}>{item.heading}</th>
        ))}
      </tr>
    </THead>
    <tbody>
      {list.map((item, i) => (
        <tr>
          {cols.map((colItem, j) => (
            <td key={`item_${colItem.key}_${i}_${j}`}>
              {renderItem(item, colItem)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </BTable>
);

Table.propTypes = {
  cols: arrayOf(shape({})).isRequired,
  list: arrayOf(shape({})).isRequired,
  hover: bool,
  responsive: oneOfType([string | bool]),
  borderless: bool,
  bordered: bool,
  size: string,
  striped: bool,
  variant: string,
  bsPrefix: string,
};

Table.defaultProps = {
  hover: true,
  responsive: true,
  borderless: false,
  bordered: false,
  size: null,
  striped: false,
  variant: null,
  bsPrefix: "table",
};

export default Table;

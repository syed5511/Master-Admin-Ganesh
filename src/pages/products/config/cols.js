import React from "react";

import {
  NameWrap,
  Name,
  Placeholder,
  Status,
} from "../../../common-components/common/table-items-style";

const cols = [
  {
    key: "item_name",
    heading: "Item Name",
    type: "render",
    render: (r) => (
      <NameWrap>
        <Placeholder /> <Name>{r.item_name}</Name>
      </NameWrap>
    ),
  },
  {
    key: "item_type",
    heading: "Item Type",
  },
  {
    key: "kitchen_name",
    heading: "Kitchen Name",
  },
  {
    key: "city",
    heading: "City",
  },
  {
    key: "zip_code",
    heading: "Zip Code",
  },
  {
    key: "serving_days",
    heading: "Serving Days",
  },
  {
    key: "status",
    heading: "Status",
    type: "render",
    render: (r) => <Status className={r.status}>{r.status}</Status>,
  },
];

export default cols;

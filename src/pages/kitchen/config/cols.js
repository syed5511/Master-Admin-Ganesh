import React from "react";

import {
  Name,
  Status,
} from "../../../common-components/common/table-items-style";

const cols = [
  {
    key: "kitchen_name",
    heading: "Kitchen Name",
    type: "render",
    render: (r) => <Name>{r.kitchen_name}</Name>,
  },
  {
    key: "state",
    heading: "State",
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
    key: "zone_no",
    heading: "Zone No",
  },
  {
    key: "status",
    heading: "Status",
    type: "render",
    render: (r) => <Status className={r.status}>{r.status}</Status>,
  },
];

export default cols;

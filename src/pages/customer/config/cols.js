import React from "react";

import {
  Name,
  Status,
} from "../../../common-components/common/table-items-style";
import history from "../../../history";

const cols = [
  {
    key: "customer_id",
    heading: "Customer ID",
    type: "render",
    render: (r) => (
      <Name
        onClick={() => {
          history.push("/customer/customer-details");
        }}
      >
        {r.customer_id}
      </Name>
    ),
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
    key: "meal_plan",
    heading: "Meal Plan",
  },
  {
    key: "status",
    heading: "Status",
    type: "render",
    render: (r) => <Status className={r.status}>{r.status}</Status>,
  },
];

export default cols;

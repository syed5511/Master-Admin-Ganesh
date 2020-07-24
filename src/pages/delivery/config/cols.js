import React from "react";

const cols = [
  {
    key: "item_name",
    heading: "Item Name",
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
    render: (r) => (
      <div
        style={r.status === "Active" ? { color: "green" } : { color: "red" }}
      >
        {r.status}
      </div>
    ),
  },
];

export default cols;

const form = {
  controls: [
    {
      name: "zone_no",
      type: "static",
      label: "Zone No:",
      value: "101",
      inline: true,
      col: { xs: 12, sm: 12, md: 6 },
    },
    {
      name: "delivery_price",
      type: "static",
      label: "Delivery Price:",
      value: "Free",
      inline: true,
      col: { xs: 12, sm: 12, md: 6 },
    },
    {
      name: "state",
      type: "select",
      includeFilter: false,
      label: "Select State",
      placeholder: "Select State",
      col: { xs: 12, sm: 12, md: 12 },
      options: [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "zip_codes",
      type: "tags",
      label: "Enter Zip Codes",
      placeholder: "Enter..",
      col: { xs: 12, sm: 12, md: 12 },
    },
  ],
};

export default form;

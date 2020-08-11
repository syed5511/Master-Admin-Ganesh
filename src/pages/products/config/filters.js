const filters = {
  showActions: false,
  getValuesOn: ["change"],
  controls: [
    {
      name: "days",
      type: "select",
      placeholder: "Days",
      includeFilter: false,
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "sunday", label: "Sunday" },
        { value: "monday", label: "Monday" },
      ],
    },
    {
      name: "kitchen_name",
      type: "select",
      placeholder: "Kitchen",
      includeFilter: false,
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "item_type",
      type: "select",
      placeholder: "Item Type",
      includeFilter: false,
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "item_name",
      type: "input",
      col: { xs: 6, sm: 4, md: 2 },
      inputType: "text",
      placeholder: "Item Name",
    },
  ],
};

export default filters;

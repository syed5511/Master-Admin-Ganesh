const filters = {
  showActions: false,
  getValuesOn: ["change"],
  controls: [
    {
      name: "days",
      type: "select",
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "", label: "Days" },
        { value: "sunday", label: "Sunday" },
        { value: "monday", label: "Monday" },
      ],
    },
    {
      name: "kitchen_name",
      type: "select",
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "", label: "Kitchen" },
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "item_type",
      type: "select",
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "", label: "Item Type" },
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

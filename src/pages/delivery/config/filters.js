const filters = {
  showActions: false,
  getValuesOn: ["change"],
  controls: [
    {
      name: "state",
      type: "select",
      placeholder: "State",
      includeFilter: false,
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "illinios", label: "Illinios" },
        { value: "albama", label: "Albama" },
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
      name: "item_name",
      type: "input",
      col: { xs: 6, sm: 4, md: 2 },
      inputType: "text",
      placeholder: "Item Name",
    },
  ],
};

export default filters;

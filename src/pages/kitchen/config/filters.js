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
        { value: "syed", label: "syedKitchen" },
        { value: "some other", label: "syedKitchen 2" },
      ],
    },
    {
      name: "zone_no",
      type: "select",
      placeholder: "Zone no",
      includeFilter: false,
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "101", label: "101" },
        { value: "102", label: "102" },
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

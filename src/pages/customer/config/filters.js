const filters = {
  showActions: false,
  getValuesOn: ["change"],
  controls: [
    {
      name: "state",
      type: "select",
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "", label: "State" },
        { value: "illinios", label: "Illinios" },
        { value: "albama", label: "Albama" },
      ],
    },
    {
      name: "city",
      type: "select",
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "", label: "City" },
        { value: "chicago", label: "Chicago" },
        { value: "some_other_city", label: "Some Other City" },
      ],
    },
    {
      name: "zip_code",
      type: "input",
      col: { xs: 6, sm: 4, md: 2 },
      inputType: "text",
      placeholder: "Zip Code",
    },
    {
      name: "meal_plans",
      type: "select",
      col: { xs: 6, sm: 4, md: 2 },
      options: [
        { value: "", label: "Meal Plans" },
        { value: "two_person_four_days", label: "2 Person - 4 Days" },
        { value: "four_person_four_days", label: "4 Person - 4 Days" },
      ],
    },
    {
      name: "customer_id",
      type: "input",
      col: { xs: 6, sm: 4, md: 2 },
      inputType: "text",
      placeholder: "Customer ID",
    },
  ],
};

export default filters;

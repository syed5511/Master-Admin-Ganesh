const form = {
  title: "Some Form",
  controls: [
    {
      name: "kitchen_name",
      type: "select",
      label: "Kitchen Name",
      options: [
        { value: "", label: "Select Kitchen" },
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "item_type",
      type: "select",
      label: "Item Type",
      options: [
        { value: "", label: "Select Item Type" },
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "item_name",
      type: "input",
      label: "Item Name",
      required: true,
      inputType: "text",
      placeholder: "Enter Item Name",
    },
    {
      name: "recipe_with",
      type: "input",
      label: "Recipe With",
      inputType: "text",
      placeholder: "Enter Recipe With",
    },
    {
      name: "ingredients",
      type: "textarea",
      label: "Ingredients",
      placeholder: "Enter Ingredients",
    },
    {
      name: "Tags",
      type: "tags",
      label: "Tags",
      placeholder: "Enter Tags",
    },
  ],
};

export default form;

const form = {
  getValuesOn: ["change", "submit"],
  controls: [
    {
      name: "product_id",
      type: "static",
      label: "Product ID",
      value: "1234567890AM",
      inline: true,
      col: { xs: 12, sm: 12, md: 12 },
    },
    {
      name: "kitchen_name",
      type: "select",
      label: "Kitchen Name",
      options: [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "item_type",
      type: "select",
      label: "Item Type",
      options: [
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
      name: "serving_temperature-select",
      type: "multi-select",
      label: "Serving Temperature",
      col: { xs: 12, sm: 6, md: 6 },
      multiple: true,
      options: [
        {
          label: "30 C",
          value: "30_c",
        },
        {
          label: "40 C",
          value: "40_c",
        },
        {
          label: "50 C",
          value: "50_c",
        },
      ],
    },
    {
      name: "ingredients",
      type: "textarea",
      label: "Ingredients",
      placeholder: "Enter Ingredients",
    },
    {
      name: "recipe_with",
      type: "textarea",
      label: "Recipe With",
      placeholder: "Enter Recipe With",
    },
    {
      name: "size_single_person",
      type: "input",
      label: "Size Single Person",
      inputType: "text",
      col: { xs: 12, sm: 6, md: 3 },
      placeholder: "Enter",
    },
    {
      name: "size_double_person",
      type: "input",
      label: "Size Double Person",
      col: { xs: 12, sm: 6, md: 3 },
      inputType: "text",
      placeholder: "Enter",
    },
    {
      name: "special_marketing",
      type: "select",
      label: "Special Marketing",
      options: [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "allergic_ingredients",
      type: "select",
      label: "Allergic Ingredients",
      options: [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "product_image",
      type: "file",
      id: "product_image",
      label: "Upload Image",
      placeholder: "Attach File",
    },
    {
      name: "chef_name",
      type: "select",
      label: "Chef Name",
      options: [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "cuisine_type",
      type: "select",
      label: "Cuisine type",
      options: [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      options: [
        { value: "one", label: "One" },
        { value: "two", label: "Two" },
      ],
    },
    {
      name: "pay_as_you_go",
      type: "input",
      label: "Pay As You Go (Price)",
      inputType: "text",
      placeholder: "Enter",
      prefix: "$",
      valueRegex: /^[0-9]+(\.[0-9]{0,2})?$/,
    },
  ],
};

export default form;

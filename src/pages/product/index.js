import React, { useState } from "react";

import Layout from "../../common-components/Layout";
import Table from "../../common-components/Table";
import Pagination from "../../common-components/Pagination";
import Form from "../../common-components/Form";

const ProductPage = () => {
  const [page, setPage] = useState(1);
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
  const list = [
    {
      item_name: "Chicken Biryani Chicken",
      item_type: "Main Course",
      kitchen_name: "Syed Kitchen 5511",
      city: "Chicago",
      zip_code: 60078,
      serving_days: "Sunday, Monday, Tuesday",
      status: "Active",
    },
    {
      item_name: "Chicken Biryani Chicken",
      item_type: "Main Course",
      kitchen_name: "Syed Kitchen 5511",
      city: "Chicago",
      zip_code: 60078,
      serving_days: "Sunday, Monday, Tuesday",
      status: "Inactive",
    },
  ];
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
    ],
  };
  return (
    <Layout>
      <Table cols={cols} list={list} size="sm" />
      <Pagination page={page} onPageChange={setPage} total={10} />
      <Form form={form} getValues={(v) => console.log(v)} />
    </Layout>
  );
};

export default ProductPage;

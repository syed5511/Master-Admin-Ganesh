import React, { useState } from "react";
import { shape } from "prop-types";

import form from "../config/form";
import Form from "../../../common-components/Form";
import KitchenSlabs from "./KitchenSlabs";

const AddZipCodes = ({ data }) => {
  const [mode, setMode] = useState("edit");
  const [additionalData, setAdditionalData] = useState({
    kitchen: [{ name: "kitchen_0", value: null }],
  });

  const onValidate = (values) => {
    const errors = {};
    console.log(values, "onValidate values");
    // validation logic
    return errors;
  };

  const onSubmit = (values) => {
    console.log("submitted values", values);
  };

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      mode={mode}
      // onEdit={() => {
      //   setMode("edit");
      // }}
      onValidate={onValidate}
    >
      <KitchenSlabs
        additionalData={additionalData}
        setAdditionalData={setAdditionalData}
      />
    </Form>
  );
};

AddZipCodes.propTypes = {
  data: shape({}),
};

AddZipCodes.defaultProps = {
  data: {},
};

export default AddZipCodes;

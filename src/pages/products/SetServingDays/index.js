import React from "react";
import { shape } from "prop-types";

import servingDaysForm from "../config/servingDaysForm";
import Form from "../../../common-components/Form";
import Alert from "../../../common-components/Alert";
import { Container, TopDetails, Label, Value } from "./styles";

const SetServingDays = ({ data }) => {
  const onFormChange = (v) => {
    console.log(v);
  };

  return (
    <Container>
      <Alert theme="success">Successfully Saved!</Alert>
      <Alert theme="danger">Something went wrong!</Alert>
      <TopDetails>
        <Label>Kitchen Name</Label>
        <Value>{data.kitchen_name}</Value>
        <Label className="m-t-8">Item Type</Label>
        <Value>{data.item_type}</Value>
        <Label className="m-t-8">Item Name</Label>
        <Value>{data.item_name}</Value>
      </TopDetails>
      <Label>Serving Days</Label>
      <Form
        form={servingDaysForm}
        formValues={{ serving_days: data.serving_days }}
        getValues={onFormChange}
      />
    </Container>
  );
};

SetServingDays.propTypes = {
  data: shape({}),
};

SetServingDays.defaultProps = {
  data: {},
};

export default SetServingDays;

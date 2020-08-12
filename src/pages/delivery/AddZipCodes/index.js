import React, { useState, func } from "react";
import { shape } from "prop-types";

import form from "../config/form";
import Form from "../../../common-components/Form";
import KitchenSlabs from "./KitchenSlabs";
import AdditionalDeliveryZones from "./AdditionalDeliveryZones";

const AddZipCodes = ({ data, onCancel }) => {
  const [mode, setMode] = useState("edit");
  const [kitchenErrors, setKitchenErrors] = useState({});
  const [deliveryZoneErrors, setDeliveryZoneErrors] = useState({});
  const [additionalData, setAdditionalData] = useState({
    kitchen: [
      {
        kitchen: null,
        key: `kitchen_${new Date().getTime()}`,
      },
    ],
    delivery_zones: [
      {
        zone_no: null,
        delivery_price: null,
        key: `detail_${new Date().getTime()}`,
      },
    ],
  });

  const onValidateKitchen = () => {
    const errors = {};
    if (
      !additionalData.kitchen ||
      (additionalData.kitchen && additionalData.kitchen.length === 0)
    ) {
      errors.kitchen = "Please add atleast 1 Kitchen";
      setKitchenErrors({
        kitchen: errors.kitchen,
      });
    } else {
      additionalData.kitchen.forEach((item) => {
        if (!item.kitchen) {
          if (!errors.hasOwnProperty("kitchen")) {
            errors.kitchen = {};
          }
          errors.kitchen[item.key] = "Please select a kitchen";
        }
        if (errors.hasOwnProperty("kitchen")) {
          setKitchenErrors({
            kitchen: errors.kitchen,
          });
        }
      });
    }
    return errors.kitchen;
  };

  const onValidateDeliveryZones = () => {
    const errors = {};
    if (
      !additionalData.delivery_zones ||
      (additionalData.delivery_zones &&
        additionalData.delivery_zones.length === 0)
    ) {
      errors.delivery_zones = "Please add atleast 1 entry";
      setDeliveryZoneErrors({
        delivery_zones: errors.delivery_zones,
      });
    } else {
      additionalData.delivery_zones.forEach((item) => {
        console.log("item", item.zone_no);
        if (!item.zone_no) {
          if (!errors.hasOwnProperty("delivery_zones")) {
            errors.delivery_zones = {};
          }
          errors.delivery_zones[`zone_no_${item.key}`] = "Please enter zone no";
        }
        if (!item.delivery_price) {
          if (!errors.hasOwnProperty("delivery_zones")) {
            errors.delivery_zones = {};
          }
          errors.delivery_zones[`delivery_price_${item.key}`] =
            "Please enter delivery price";
        }
        if (errors.hasOwnProperty("delivery_zones")) {
          setDeliveryZoneErrors({
            delivery_zones: errors.delivery_zones,
          });
        }
      });
    }
    return errors.delivery_zones;
  };

  const onValidate = (values) => {
    const errors = {};
    // console.log(values, "onValidate values");
    // validation logic
    if (!values.state) {
      errors.state = "Please select a State";
    }
    if (
      !values.zip_codes ||
      (values.zip_codes && values.zip_codes.length === 0)
    ) {
      errors.zip_codes = "Please enter Zip Codes";
    } else if (values.zip_codes.some((item) => item.duplicate === true)) {
      console.log("here");
      errors.zip_codes = "Duplicate zip codes not allowed";
    }
    if (onValidateKitchen() === undefined) {
      return errors;
    }
    if (onValidateDeliveryZones() === undefined) {
      return errors;
    }
    return Object.keys(errors).length > 0 ? errors : null;
  };

  const onSubmit = (values) => {
    console.log("submitted values", { ...values, ...additionalData });
  };

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      onCancel={onCancel}
      mode={mode}
      // onEdit={() => {
      //   setMode("edit");
      // }}
      onValidate={onValidate}
    >
      <KitchenSlabs
        additionalData={additionalData}
        setAdditionalData={setAdditionalData}
        errors={kitchenErrors}
        setErrors={setKitchenErrors}
      />
      <AdditionalDeliveryZones
        additionalData={additionalData}
        setAdditionalData={setAdditionalData}
        errors={deliveryZoneErrors}
        setErrors={setDeliveryZoneErrors}
      />
    </Form>
  );
};

AddZipCodes.propTypes = {
  data: shape({}),
  onCancel: func,
};

AddZipCodes.defaultProps = {
  data: {},
  onCancel: () => false,
};

export default AddZipCodes;

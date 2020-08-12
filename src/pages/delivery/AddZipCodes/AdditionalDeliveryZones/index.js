import React, { useState } from "react";

import InputControl from "../../../../common-components/Form/FormControl/Field/InputControl";
import Button from "../../../../common-components/Button";
import {
  Col,
  Container,
  Label,
  Group,
  Remove,
  SmallLabel,
  InputGroup,
  Error,
} from "../styles";

const AdditionalDeliveryZones = ({
  additionalData,
  setAdditionalData,
  errors,
  setErrors,
}) => {
  const [state, setState] = useState(additionalData.delivery_zones);

  const resetError = (name, key) => {
    const obj = {
      [`${name}_${key}`]: undefined,
    };
    if (name === "both") {
      obj[`zone_no_${key}`] = undefined;
      obj[`delivery_price_${key}`] = undefined;
    }
    setErrors({
      ...errors,
      delivery_zones: {
        ...errors.delivery_zones,
        ...obj,
      },
    });
  };

  const onChange = (name, v, index, key) => {
    const _state = [...state];
    _state[index][name] = v[name];
    resetError(name, key);
    setState(_state);
    setAdditionalData({
      ...additionalData,
      delivery_zones: _state,
    });
  };

  const onAdd = () => {
    let newState = [
      ...state,
      {
        zone_no: null,
        delivery_price: null,
        key: `detail_${new Date().getTime()}`,
      },
    ];
    if (
      state.length === 0 &&
      errors.delivery_zones &&
      typeof errors.delivery_zones === "string"
    ) {
      setErrors({});
    }
    setState(newState);
    setAdditionalData({
      ...additionalData,
      delivery_zones: newState,
    });
  };

  const onRemove = (index, key) => {
    const _state = [...state];
    _state.splice(index, 1);
    setState(_state.slice(0, index).concat(_state.slice(index)));
    setAdditionalData({
      ...additionalData,
      delivery_zones: _state,
    });
    resetError("both", key);
  };

  // console.log("state", state);

  return (
    <Container>
      <Label>
        Additional Delivery Zones
        <Button type="button" theme="submit" className="add" onClick={onAdd}>
          + Add
        </Button>
      </Label>
      <Col>
        <Group className="label-group">
          <SmallLabel>Zone No</SmallLabel>
          <SmallLabel>Delivery Price</SmallLabel>
        </Group>
        {state.map((item, i) => (
          <Group key={item.key} className="repeating-group">
            <InputGroup>
              <InputControl
                error={
                  errors.delivery_zones &&
                  errors.delivery_zones[`zone_no_${item.key}`]
                }
                name="zone_no"
                inputType="text"
                placeholder="Enter.."
                values={{ zone_no: item.zone_no }}
                setValues={(v) => onChange("zone_no", v, i, item.key)}
              />
              {errors.delivery_zones &&
                errors.delivery_zones[`zone_no_${item.key}`] && (
                  <Error>{errors.delivery_zones[`zone_no_${item.key}`]}</Error>
                )}
            </InputGroup>
            <InputGroup>
              <InputControl
                error={
                  errors.delivery_zones &&
                  errors.delivery_zones[`delivery_price_${item.key}`]
                }
                name="delivery_price"
                inputType="text"
                placeholder="Enter.."
                values={{ delivery_price: item.delivery_price }}
                setValues={(v) => onChange("delivery_price", v, i, item.key)}
              />
              {errors.delivery_zones &&
                errors.delivery_zones[`delivery_price_${item.key}`] && (
                  <Error>
                    {errors.delivery_zones[`delivery_price_${item.key}`]}
                  </Error>
                )}
            </InputGroup>
            <Remove onClick={() => onRemove(i, item.key)}>X</Remove>
          </Group>
        ))}
        {errors.delivery_zones && typeof errors.delivery_zones === "string" && (
          <Error>{errors.delivery_zones}</Error>
        )}
      </Col>
    </Container>
  );
};

export default AdditionalDeliveryZones;

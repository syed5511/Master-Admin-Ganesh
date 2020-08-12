import React, { useState } from "react";

import MultiSelectControl from "../../../../common-components/Form/FormControl/Field/MultiSelectControl";
import Button from "../../../../common-components/Button";
import {
  Col,
  Container,
  Label,
  Group,
  Remove,
  Error,
  InputGroup,
} from "../styles";

const KitchenSlabs = ({
  additionalData,
  setAdditionalData,
  errors,
  setErrors,
}) => {
  const [state, setState] = useState(additionalData.kitchen);

  const resetError = (key) => {
    if (errors.kitchen && errors.kitchen[key]) {
      setErrors({
        ...errors,
        kitchen: {
          ...errors.kitchen,
          [key]: undefined,
        },
      });
    }
  };

  const onChange = (name, v, index, key) => {
    const _state = [...state];
    resetError(key);
    _state[index].kitchen = v[name];
    setState(_state);
    setAdditionalData({
      ...additionalData,
      kitchen: _state,
    });
  };

  const onAdd = () => {
    const index = state.length;
    let newState = [
      ...state,
      {
        kitchen: null,
        key: `kitchen_${new Date().getTime()}`,
      },
    ];
    if (index === 0 && errors.kitchen && typeof errors.kitchen === "string") {
      setErrors({});
    }
    setState(newState);
    setAdditionalData({
      ...additionalData,
      kitchen: newState,
    });
  };

  const onRemove = (index, key) => {
    const _state = [...state];
    _state.splice(index, 1);
    setState(_state);
    setAdditionalData({
      ...additionalData,
      kitchen: _state,
    });
    resetError(key);
  };

  return (
    <Container>
      <Label>
        Select Kitchens{" "}
        <Button type="button" theme="submit" className="add" onClick={onAdd}>
          + Add
        </Button>
      </Label>
      <Col>
        {state.map((item, i) => (
          <Group key={item.key}>
            <InputGroup>
              <MultiSelectControl
                error={errors.kitchen && errors.kitchen[item.key]}
                name="kitchen"
                values={{
                  kitchen: item.kitchen
                    ? {
                        label: item.kitchen.label,
                        value: item.kitchen.value,
                      }
                    : null,
                }}
                setValues={(v) => onChange("kitchen", v, i, item.key)}
                options={[
                  {
                    label: "Kitchen 1",
                    value: "kitchen_1",
                  },
                  {
                    label: "Kitchen 2",
                    value: "kitchen_2",
                  },
                ]}
                multiple={false}
                placeholder="Select Kitchen"
                includeSelectAll={false}
                includeFilter={false}
              />
              {errors.kitchen && errors.kitchen[item.key] && (
                <Error>{errors.kitchen[item.key]}</Error>
              )}
            </InputGroup>
            <Remove onClick={() => onRemove(i, item.key)}>X</Remove>
          </Group>
        ))}
        {errors.kitchen && typeof errors.kitchen === "string" && (
          <Error>{errors.kitchen}</Error>
        )}
      </Col>
    </Container>
  );
};

export default KitchenSlabs;

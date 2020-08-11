import React, { useState } from "react";

import MultiSelectControl from "../../../../common-components/Form/FormControl/Field/MultiSelectControl";
import Button from "../../../../common-components/Button";
import { Col, Container, Label, Group, Remove } from "./styles";

const KitchenSlabs = ({ additionalData, setAdditionalData }) => {
  const [state, setState] = useState(additionalData.kitchen);

  const onChange = (name, v, index) => {
    const _state = [...state];
    _state[index].value = v[name];
    setState(_state);
    setAdditionalData({
      ...additionalData,
      kitchen: _state,
    });
  };

  const onAdd = () => {
    const index = state.length;
    let newState = [...state, { name: `kitchen_${index}`, value: null }];
    setState(newState);
    setAdditionalData({
      ...additionalData,
      kitchen: newState,
    });
  };

  const onRemove = (index) => {
    const _state = [...state];
    _state.splice(index, 1);
    setState(_state);
    setAdditionalData({
      ...additionalData,
      kitchen: _state,
    });
  };

  console.log("state", state);

  return (
    <Container>
      <Label>
        Select Kitchens{" "}
        <Button type="button" theme="submit" className="add" onClick={onAdd}>
          Add
        </Button>
      </Label>
      <Col>
        {state.map((item, i) => (
          <Group key={item.name}>
            <MultiSelectControl
              name={`kitchen_${i}`}
              values={{
                [`kitchen_${i}`]: item.value
                  ? {
                      label: item.value.label,
                      value: item.value.value,
                    }
                  : null,
              }}
              setValues={(v) => onChange(item.name, v, i)}
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
            <Remove onClick={() => onRemove(i)}>X</Remove>
          </Group>
        ))}
      </Col>
    </Container>
  );
};

export default KitchenSlabs;

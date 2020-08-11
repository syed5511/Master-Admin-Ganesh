import React from "react";

import { SelectAllCover, Li } from "./styles";
import { Picky } from "react-picky";
import "react-picky/dist/picky.css";
import Form from "react-bootstrap/Form";
const { Check } = Form;

const MultiSelectControl = ({
  name,
  values,
  setValues,
  options,
  disabled,
  required,
  multiple,
}) => {
  return (
    <Picky
      options={options}
      value={values[name] || (multiple && []) || null}
      multiple={multiple}
      disabled={disabled}
      required={required}
      labelKey="label"
      valueKey="value"
      includeSelectAll={true}
      includeFilter={true}
      onChange={(v) => {
        setValues({
          ...values,
          [name]: v,
        });
      }}
      dropdownHeight={600}
      renderSelectAll={({
        filtered,
        tabIndex,
        allSelected,
        toggleSelectAll,
        multiple,
      }) => {
        if (multiple && !filtered) {
          return (
            <SelectAllCover
              tabIndex={tabIndex}
              role="option"
              className={allSelected ? "option selected" : "option"}
              onClick={toggleSelectAll}
              onKeyPress={toggleSelectAll}
            >
              <span>SELECT ALL</span>
            </SelectAllCover>
          );
        }
      }}
      render={({
        style,
        isSelected,
        item,
        selectValue,
        labelKey,
        valueKey,
        multiple,
      }) => {
        return (
          <Li
            style={style}
            className={isSelected ? "selected" : ""}
            key={item[valueKey]}
            onClick={() => selectValue(item)}
          >
            <Check
              checked={isSelected}
              readOnly
              type={multiple ? "checkbox" : "radio"}
            />
            <span>{item[labelKey]}</span>
          </Li>
        );
      }}
    />
  );
};

export default MultiSelectControl;

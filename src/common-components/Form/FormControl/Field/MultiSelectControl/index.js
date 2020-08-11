import React from "react";
import { string, shape, func, arrayOf, bool } from "prop-types";
import { Picky } from "react-picky";
import "react-picky/dist/picky.css";
import Form from "react-bootstrap/Form";

import { SelectAllCover, Li } from "./styles";
const { Check } = Form;

const MultiSelectControl = ({
  name,
  values,
  setValues,
  options,
  disabled,
  multiple,
  placeholder,
  includeSelectAll,
  includeFilter,
  setErrors,
}) => {
  return (
    <Picky
      options={options}
      value={values[name] || (multiple && []) || null}
      multiple={multiple}
      disabled={disabled}
      labelKey="label"
      valueKey="value"
      includeSelectAll={includeSelectAll}
      includeFilter={includeFilter}
      placeholder={placeholder}
      onChange={(v) => {
        setErrors({
          [name]: null,
        });
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

MultiSelectControl.propTypes = {
  name: string.isRequired,
  values: shape({}),
  setValues: func,
  options: arrayOf(shape({})),
  disabled: bool,
  multiple: bool,
  placeholder: string,
  includeSelectAll: bool,
  includeFilter: bool,
  setErrors: func,
};

MultiSelectControl.defaultProps = {
  name: null,
  values: {},
  setValues: null,
  options: [],
  disabled: false,
  multiple: false,
  includeSelectAll: true,
  includeFilter: true,
  setErrors: () => {},
  placeholder: "Select",
};

export default MultiSelectControl;

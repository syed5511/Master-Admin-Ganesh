import React, { useState, useEffect } from "react";
import { shape, func, string } from "prop-types";

import FormControl from "./FormControl";
import Button from "../Button";
import getInitialValues from "./utils/getInitialValues";
import {
  Container,
  FormTitle,
  FormContainer,
  GridRow,
  Actions,
} from "./styles";

const Form = ({
  form,
  getValues,
  formValues,
  mode,
  onEdit,
  onCancel,
  onSubmit,
  onValidate,
}) => {
  const { title, controls, getValuesOn = [], showActions = true } = form;
  const [mounted, setMounted] = useState(false);
  const initialValues = getInitialValues(controls);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (mounted && getValuesOn.indexOf("change") !== -1) {
      getValues(values);
    }
  }, [JSON.stringify(values)]);

  useEffect(() => {
    setValues({ ...values, ...formValues });
  }, [JSON.stringify(formValues)]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (onValidate) {
      e.stopPropagation();
      const _errors = onValidate(values);
      console.log("error, ", _errors);
      if (_errors) {
        setErrors(_errors);
        return;
      } else {
        onSubmit(values);
      }
    } else {
      onSubmit(values);
    }
  };

  return (
    <Container>
      {title && <FormTitle>{title}</FormTitle>}
      <FormContainer onSubmit={onFormSubmit} noValidate>
        <GridRow>
          {controls.map((item) => (
            <FormControl
              key={item.name}
              {...item}
              mode={mode}
              values={values}
              setValues={setValues}
              error={errors[item.name]}
            />
          ))}
        </GridRow>
        {showActions && (
          <Actions>
            {mode === "edit" ? (
              <>
                <Button onClick={onCancel} theme="cancel">
                  CANCEL
                </Button>
                <Button type="submit" theme="submit">
                  SUBMIT
                </Button>
              </>
            ) : (
              <Button onClick={onEdit} theme="edit">
                Edit
              </Button>
            )}
          </Actions>
        )}
      </FormContainer>
    </Container>
  );
};

Form.propTypes = {
  form: shape({}).isRequired,
  getValues: func.isRequired,
  formValues: shape({}),
  mode: string,
  onEdit: func,
  onCancel: func,
  onSubmit: func,
  onValidate: func,
};

Form.defaultProps = {
  formValues: {},
  mode: "edit",
  onEdit: null,
  onCancel: null,
  onSubmit: null,
  onValidate: null,
};

export default Form;

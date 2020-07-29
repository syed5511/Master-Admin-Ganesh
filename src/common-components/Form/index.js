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

const Form = ({ form, getValues, formValues }) => {
  const {
    title,
    controls,
    getValuesOn = ["submit"],
    formMode = "edit",
    showActions = true,
  } = form; // formMode --> [edit, preview]
  const [mounted, setMounted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [mode, setMode] = useState(formMode);
  const initialValues = getInitialValues(controls);
  const [values, setValues] = useState(initialValues);

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
    const form = e.currentTarget;
    console.log("form.checkValidity()", form.checkValidity());
    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    setValidated(true);
    getValues(values);
  };

  return (
    <Container>
      {title && <FormTitle>{title}</FormTitle>}
      <FormContainer onSubmit={onFormSubmit} noValidate validated={validated}>
        <GridRow>
          {controls.map((item) => (
            <FormControl
              key={item.name}
              {...item}
              mode={mode}
              values={values}
              setValues={setValues}
            />
          ))}
        </GridRow>
        {showActions && (
          <Actions>
            {mode === "edit" ? (
              <>
                <Button
                  onClick={() => {
                    setMode("preview");
                  }}
                  theme="cancel"
                >
                  CANCEL
                </Button>
                <Button type="submit" theme="submit">
                  SUBMIT
                </Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  setMode("edit");
                }}
                theme="edit"
              >
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
};

Form.defaultProps = {
  formValues: {},
  mode: "edit",
};

export default Form;
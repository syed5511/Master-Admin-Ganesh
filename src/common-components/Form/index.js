import React, { useState, useEffect } from "react";
import { shape, func, string } from "prop-types";
import Button from "react-bootstrap/Button";

import FormControl from "./FormControl";
import getInitialValues from "./utils/getInitialValues";
import {
  Container,
  FormTitle,
  FormContainer,
  GridRow,
  Actions,
} from "./styles";

const Form = ({ form, getValues, formValues }) => {
  const { title, controls, getValuesOn = ["submit"], formMode = "edit" } = form; // formMode --> [edit, preview]
  const [mode, setMode] = useState(formMode);
  const initialValues = getInitialValues(controls);
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    if (getValuesOn.indexOf("change") !== -1) {
      getValues(values);
    }
  }, [JSON.stringify(values)]);

  useEffect(() => {
    setValues({ ...values, ...formValues });
  }, [JSON.stringify(formValues)]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    getValues(values);
  };

  return (
    <Container>
      {title && <FormTitle>{title}</FormTitle>}
      <FormContainer onSubmit={onFormSubmit}>
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
        {mode === "edit" ? (
          <Actions>
            <Button
              type="button"
              onClick={() => {
                setMode("preview");
              }}
            >
              CANCEL
            </Button>
            <Button type="submit">SUBMIT</Button>
          </Actions>
        ) : (
          <Button
            type="button"
            onClick={() => {
              setMode("edit");
            }}
          >
            Edit
          </Button>
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

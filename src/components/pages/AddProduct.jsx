import React from "react";
import { useState } from "react";
import Select from "react-select";
import SelectComponent from "../common/SelectComponent";
import ButtonComponent from "../common/ButtonComponent";
import SuccessAlert from "./../common/SuccessAlert";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const [Countries] = useState([
    { label: "Chiken Biriyani" },
    { label: "Idly" },
    { label: "Dosa" },
    { label: "Pulav" },
    { label: "Fried Rice" },
    { label: "Paratha" },
    { label: "Roti" },
  ]);

  const [options] = useState([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]);

  const [selectedOption] = useState(null);

  const handleChange = () => {
    return selectedOption;
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="mt-5 pt-4">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <label className="label" style={{ color: "#306BF3" }}>
                  <b>
                    <i className="fa fa-home form-control-feedback mr-3 fa-lg" />
                  </b>
                </label>
                <label className="label" style={{ color: "#306BF3" }}>
                  <b>Products</b>
                </label>

                <label className="label ml-3" style={{ color: "#306BF3" }}>
                  <b>
                    <i className="fa fa-chevron-right form-control-feedback mr-3 fa-sm" />
                  </b>
                </label>
                <label className="label">
                  <b>Add Product</b>
                </label>
              </div>
              <div className="col-md-1"></div>
              <div className="form-group col-md-4">
                <SuccessAlert label="Sucessfully Product Saved" type="prdSuc" />
              </div>
              <div className="col-md-2"></div>
              <div className="form=group col-md-2">
                <ButtonComponent
                  icon={
                    <i className="fa fa-plus form-control-feedback mr-3 fa-sm" />
                  }
                  label="PRODUCT"
                  type="prdbtn"
                />
              </div>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{
            kitchenName: "",
            itemName: "",
            recipeWith: "",
            ingradients: "",
          }}
          validationSchema={Yup.object().shape({
            kitchenName: Yup.string().required("Kitchen Name is required"),
            itemName: Yup.string().required("Item Name is required"),
            recipeWith: Yup.string().required("Recipe is required"),
            ingradients: Yup.string().required("Indgradients are required"),
          })}
          onSubmit={(fields) => {
            alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          }}
        >
          {({ errors, status, touched }) => (
            <Form
              className="pt-4 col-md-8 addForm"
              style={{
                marginBottom: "90px",
                marginTop: "-20px",
              }}
            >
              <div className="form-row col-md-12">
                <div className="form-group offset-md-1 col-md-2">
                  <label className="label">
                    <b>Product ID</b>
                  </label>
                </div>
                <div className="form-group col-sm-8">
                  <label className="label">
                    <b>1234567890AM</b>
                  </label>
                </div>
              </div>
              <div
                className="form-row col-md-12"
                style={{ marginTop: "-15px" }}
              >
                <div className="form-group offset-md-1 col-md-5">
                  <label className="label">
                    <b>Kitchen Name *</b>
                  </label>
                  <br />
                  {/* <Field
                    name="kitchenName"
                    as={
                      <SelectComponent
                        type="selectKitchen"
                        options={options}
                        onChange={handleChange}
                        value={selectedOption}
                        Placeholder="Select Kitchen"
                      />
                    }
                    className={
                      "form-control" +
                      (errors.title && touched.title ? " is-invalid" : "")
                    }
                  /> */}
                  <SelectComponent
                    type="selectKitchen"
                    options={options}
                    onChange={handleChange}
                    value={selectedOption}
                    Placeholder="Select Kitchen"
                    className="is-invalid"
                  />
                </div>
                <div className="form-group col-md-5">
                  <label className="label">
                    <b>Item Type *</b>
                  </label>
                  <br />
                  <SelectComponent
                    type="selectKitchen"
                    options={options}
                    onChange={handleChange}
                    value={selectedOption}
                    Placeholder="Select Type"
                  />
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
              </div>

              <div
                className="form-row col-md-12"
                style={{ marginTop: "-10px" }}
              >
                <div className="form-group offset-md-1 col-md-5">
                  <label className="label" htmlFor="itemName">
                    <b>Item Name *</b>
                  </label>
                  <Field
                    name="itemName"
                    type="text"
                    placeholder="Enter Item Name"
                    style={{ height: "30px" }}
                    className={
                      "form-control" +
                      (errors.itemName && touched.itemName ? " is-invalid" : "")
                    }
                  />

                  {/* <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Item Name"
                    style={{ height: "30px" }}
                  /> */}
                  <ErrorMessage
                    name="itemName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group col-md-5">
                  <label className="label" htmlFor="recipeWith">
                    <b>Recipe with *</b>
                  </label>
                  <Field
                    name="recipeWith"
                    type="text"
                    placeholder="Enter recipe with"
                    style={{ height: "30px" }}
                    className={
                      "form-control" +
                      (errors.recipeWith && touched.recipeWith
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="recipeWith"
                    component="div"
                    className="invalid-feedback"
                  />
                  {/* <input
                    className="form-control"
                    type="text"
                    style={{ height: "30px" }}
                  /> */}
                </div>
              </div>
              <div
                className="form-row col-md-12"
                style={{ marginTop: "-10px" }}
              >
                <div className="form-group offset-md-1 col-md-5">
                  <label className="label" htmlFor="ingradients">
                    <b>Ingradients *</b>
                  </label>
                  <Field
                    name="ingradients"
                    type="text"
                    as="textarea"
                    style={{ height: "75px" }}
                    className={
                      "form-control" +
                      (errors.ingradients && touched.ingradients
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="ingradients"
                    component="div"
                    className="invalid-feedback"
                  />
                  {/* <textarea className="form-control" rows="3" type="text" /> */}
                </div>
                <div className="col-md-5">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label className="label">
                        <b>Serving Temperature*</b>
                      </label>
                      <br />
                      <SelectComponent
                        type="selectType"
                        options={options}
                        onChange={handleChange}
                        value={selectedOption}
                        Placeholder="Select"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label className="label">
                        <b>Size Single Person </b>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter"
                        style={{ height: "30px" }}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label className="label">
                        <b>Size double Person</b>
                      </label>
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter"
                        style={{ height: "30px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="form-row col-md-12"
                style={{ marginTop: "-10px" }}
              >
                <div className="form-group offset-md-1 col-md-5">
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label className="label">
                        <b>Special Marketing *</b>
                      </label>
                    </div>
                    <br />
                    <div
                      className="form-group-select col-md-12"
                      style={{ marginTop: "-15px" }}
                    >
                      <Select
                        options={Countries}
                        defaultValue={[Countries[2], Countries[3]]}
                        isMulti
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group col-md-5">
                  <div className="form-row">
                    <div className="form-group col-sm-12">
                      <label className="label">
                        <b>Allergic Ingradients *</b>
                      </label>
                    </div>
                    <br />
                    <div
                      className="form-group col-md-12"
                      style={{ marginTop: "-15px" }}
                    >
                      <Select
                        options={Countries}
                        isMulti
                        defaultValue={[Countries[4], Countries[5]]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="form-row col-md-12"
                style={{ marginTop: "-10px" }}
              >
                <div className="form-group offset-md-1 col-md-5">
                  <label className="label">
                    <b>Upload Image *</b>
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    style={{ border: "1px solid #ced4da", height: "30px" }}
                  />
                </div>
                <div className="form-group col-md-5">
                  <label className="label">
                    <b>Chef Name </b>
                  </label>
                  <br />
                  <SelectComponent
                    type="selectKitchen"
                    options={options}
                    onChange={handleChange}
                    value={selectedOption}
                    Placeholder="Select Chef Name"
                  />
                </div>
              </div>
              <div
                className="form-row col-md-12"
                style={{ marginTop: "-10px" }}
              >
                <div className="form-group offset-md-1 col-md-5">
                  <label className="label">
                    <b>Cuisine Type </b>
                  </label>
                  <br />
                  <SelectComponent
                    type="selectKitchen"
                    options={options}
                    onChange={handleChange}
                    value={selectedOption}
                    Placeholder="Select Cuisine Type"
                  />
                </div>
                <div className="form-group col-md-5">
                  <label className="label">
                    <b>status </b>
                  </label>
                  <br />
                  <SelectComponent
                    type="selectKitchen"
                    options={options}
                    onChange={handleChange}
                    value={selectedOption}
                    Placeholder="Select status"
                  />
                </div>
              </div>
              <div className="form-row col-md-12">
                <div className="form-group offset-md-6 col-md-2">
                  {/* <button className="btn btn-secondary btn-block">Cancel</button> */}
                  <ButtonComponent type="prdbtn2" label="Cancel" />
                </div>
                <div className="form-group  col-md-3">
                  {/* <button type="button" className="btn btn-dark btn-block">
              Save
            </button> */}
                  <ButtonComponent type="prdbtn1" label="Save" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default AddProduct;

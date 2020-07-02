import React from "react";
import { useState } from "react";
import Select from "react-select";
import SelectComponent from "../common/SelectComponent";
import ButtonComponent from "../common/ButtonComponent";

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
      <form
        className="pt-5 ml-5 col-sm-8 addForm"
        style={{
          marginBottom: "100px",
          marginTop: "10px",
          width: "65%",
          padding: "20px 20px",
        }}
      >
        <div className="form-row" style={{ marginLeft: "90px" }}>
          <div className="form-group col-sm-2">
            <label className="label">
              <b>Product ID</b>
            </label>
          </div>
          <div className="form-group col-sm-10">
            <label className="label">
              <b>1234567890AM</b>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>Kitchen Name *</b>
            </label>
            <br />
            {/* <select className="form-control ml-5">
              <option>Select Kitchen</option>
              <option>2</option>
              <option>3</option>
            </select> */}

            <SelectComponent
              type="selectKitchen"
              options={options}
              onChange={handleChange}
              value={selectedOption}
              Placeholder="Select Kitchen"
            />
          </div>
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>Item Type *</b>
            </label>
            <br />
            {/* <select className="form-control ml-5">
              <option>Select Type</option>
              <option>2</option>
              <option>3</option>
            </select> */}
            <SelectComponent
              type="selectKitchen"
              options={options}
              onChange={handleChange}
              value={selectedOption}
              Placeholder="Select Type"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>Item Name *</b>
            </label>
            <input
              className="form-control ml-5"
              type="text"
              placeholder="Enter Item Name"
            />
          </div>
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>Recipe with *</b>
            </label>
            <input className="form-control ml-5" type="text" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>Ingradients *</b>
            </label>
            <textarea className="form-control ml-5" rows="4" type="text" />
          </div>
          <div className="col-sm-6" style={{ marginLeft: "90px" }}>
            <div className="form-row">
              <div className="form-group col-sm-4">
                <label className="label">
                  <b>Serving Temperature</b>
                </label>
                <br />
                {/* <select className="form-control">
                  <option>Select Type</option>
                  <option>2</option>
                  <option>3</option>
                </select> */}
                <SelectComponent
                  type="selectType"
                  options={options}
                  onChange={handleChange}
                  value={selectedOption}
                  Placeholder="Select"
                />
              </div>
              <div className="form-group col-sm-4">
                <label className="label">
                  <b>Size Single Person </b>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-sm-4">
                <label className="label">
                  <b>Size double Person</b>
                </label>
              </div>

              <div className="form-group col-sm-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-4" style={{ marginLeft: "90px" }}>
            <div className="form-row">
              <div className="form-group col-sm-12">
                <label className="label">
                  <b>Special Marketing *</b>
                </label>
              </div>
              <br />
              <div className="form-group-select col-sm-12 ">
                <Select
                  options={Countries}
                  defaultValue={[Countries[2], Countries[3]]}
                  isMulti
                />
              </div>
            </div>
          </div>

          <div className="form-group col-sm-4" style={{ marginLeft: "50px" }}>
            <div className="form-row">
              <div className="form-group col-sm-12">
                <label className="label">
                  <b>Allergic Ingradients *</b>
                </label>
              </div>
              <br />
              <div className="form-group col-sm-12">
                <Select
                  options={Countries}
                  isMulti
                  defaultValue={[Countries[4], Countries[5]]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>Upload Image *</b>
            </label>
            <input
              type="file"
              className="form-control-file ml-5"
              style={{ border: "1px solid #ced4da" }}
            />
          </div>
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>Chef Name </b>
            </label>
            <br />
            {/* <select className="form-control ml-5">
              <option>Select Chef Name</option>
              <option>2</option>
              <option>3</option>
            </select> */}
            <SelectComponent
              type="selectKitchen"
              options={options}
              onChange={handleChange}
              value={selectedOption}
              Placeholder="Select Chef Name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>Cuisine Type </b>
            </label>
            <br />
            {/* <select className="form-control ml-5">
              <option>Select Cuisine Type</option>
            </select> */}
            <SelectComponent
              type="selectKitchen"
              options={options}
              onChange={handleChange}
              value={selectedOption}
              Placeholder="Select Cuisine Type"
            />
          </div>
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>status </b>
            </label>
            <br />
            {/* <select className="form-control ml-5">
              <option>Select status</option>
              <option>2</option>
              <option>3</option>
            </select> */}
            <SelectComponent
              type="selectKitchen"
              options={options}
              onChange={handleChange}
              value={selectedOption}
              Placeholder="Select status"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-sm-3 ml-5"></div>
          <div className="form-group  col-sm-2 ml-5">
            {/* <button className="btn btn-secondary btn-block">Cancel</button> */}
            <ButtonComponent type="prdbtn2" label="Cancel" />
          </div>
          <div className="form-group col-sm-3 ml-5">
            {/* <button type="button" className="btn btn-dark btn-block">
              Save
            </button> */}
            <ButtonComponent type="prdbtn1" label="Save" />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddProduct;

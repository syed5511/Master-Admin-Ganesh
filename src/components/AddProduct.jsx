import React from "react";
import { useState } from "react";
import Select from "react-select";

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
  return (
    <React.Fragment>
      <form
        className="pt-5 ml-5 col-sm-8 addForm"
        style={{ marginBottom: "100px", marginTop: "10px" }}
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
            <select className="form-control ml-5">
              <option>Select Kitchen</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>Item Type *</b>
            </label>
            <select className="form-control ml-5">
              <option>Select Type</option>
              <option>2</option>
              <option>3</option>
            </select>
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
                  <b>Serving Temperature *</b>
                </label>
                <select className="form-control">
                  <option>Select Type</option>
                  <option>2</option>
                  <option>3</option>
                </select>
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
            <select className="form-control ml-5">
              <option>Select Chef Name</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>Cuisine Type </b>
            </label>
            <select className="form-control ml-5">
              <option>Select Cuisine Type</option>
            </select>
          </div>
          <div className="form-group col-sm-4 ml-5">
            <label className="label ml-5">
              <b>status </b>
            </label>
            <select className="form-control ml-5">
              <option>Select status</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-sm-3 ml-5"></div>
          <div className="form-group  col-sm-2 ml-5">
            <button className="btn btn-secondary btn-block">Cancel</button>
          </div>
          <div className="form-group col-sm-3 ml-5">
            <button type="button" className="btn btn-dark btn-block">
              Save
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddProduct;

import React from "react";

const AddProduct = () => {
  return (
    <div className="container">
      <form
        className="py-3 col-md-8 addForm"
        style={{ marginBottom: "100px", marginTop: "100px" }}
      >
        <div className="form-row">
          <div className="form-group col-md-2">
            <label className="label">
              <b>Product ID</b>
            </label>
          </div>
          <div className="form-group col-md-10">
            <label className="label">
              <b>1234567890AM</b>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="label">
              <b>Kitchen Name *</b>
            </label>
            <select className="form-control">
              <option>Select Kitchen</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="pform-group col-md-6">
            <label className="label">
              <b>Item Type *</b>
            </label>
            <select className="form-control">
              <option>Select Type</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="label">
              <b>Item Name *</b>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Item Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label className="label">
              <b>Recipe with *</b>
            </label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="label">
              <b>Ingradients *</b>
            </label>
            <textarea className="form-control" rows="3" type="text" />
          </div>
          <div className="col-md-6">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="label">
                  <b>Serving Temperature *</b>
                </label>
                <select className="form-control">
                  <option>Select Type</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>
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
              <div className="form-group col-md-6">
                <label>
                  <b>Size double Person</b>
                </label>
              </div>

              <div className="form-group col-md-6">
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
          <div className="form-group col-md-6">
            <label className="label">
              <b>Special Marketing *</b>
            </label>
            <select className="form-control">
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label className="label">
              <b>Allergic Ingradients *</b>
            </label>
            <select className="form-control">
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="label">
              <b>Upload Image *</b>
            </label>
            <input
              type="file"
              className="form-control-file"
              style={{ border: "1px solid #ced4da" }}
            />
          </div>
          <div className="form-group col-md-6">
            <label className="label">
              <b>Chef Name </b>
            </label>
            <select className="form-control">
              <option>Select Chef Name</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="label">
              <b>Cuisine Type </b>
            </label>
            <select className="form-control">
              <option>Select Cuisine Type</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label className="label">
              <b>status </b>
            </label>
            <select className="form-control">
              <option>Select status</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-5"></div>
          <div className="form-group  col-md-3">
            <button className="btn btn-secondary btn-block">Cancel</button>
          </div>
          <div className="form-group col-md-4">
            <button type="button" className="btn btn-dark btn-block">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

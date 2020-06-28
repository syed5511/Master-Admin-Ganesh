import React from "react";

//import ServingDaysPopup from "./ServingDaysPopup";
import AddProduct from "./AddProduct";
//import ProductList from "./ProductList";

//import PaginationComponent from "./Pagination";

const DashBoard = () => {
  return (
    <div>
      <div className="mt-5 pt-4">
        <div className="form-row ml-5">
          <div className="form-group col-xs-1">
            <label className="label" style={{ color: "#306BF3" }}>
              <b>Products</b>
            </label>
          </div>
          <div className="form-group col-xs-1">
            <label className="label" style={{ color: "#306BF3" }}>
              <b> > </b>
            </label>
          </div>
          <div className="form-group col-xs-3">
            <label className="label">
              <b>Add Product</b>
            </label>
          </div>
        </div>
      </div>
      <button
        className="btn prdbtn btn-dark btn-md shadow-md mr-5"
        style={{ float: "right" }}
      >
        + Products
      </button>
      {/* <ProductList /> */}
      <AddProduct />
      {/* <ServingDaysPopup /> */}
    </div>
  );
};

export default DashBoard;

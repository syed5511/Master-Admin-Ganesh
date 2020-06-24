import React from "react";
import AddProduct from "./AddProduct";

const DashBoard = () => {
  return (
    <div>
      <button
        className="btn btn-dark btn-md shadow-lg"
        style={{ float: "right", marginRight: "100px" }}
      >
        + Add Products
      </button>
      <AddProduct />
    </div>
  );
};

export default DashBoard;

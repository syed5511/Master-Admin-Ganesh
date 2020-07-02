import React from "react";
import ButtonComponent from "./common/ButtonComponent";
import ProductList from "./pages/ProductList";

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
              <b>
                <i className="fa fa-chevron-right form-control-feedback mr-3 fa-sm" />
              </b>
            </label>
          </div>
          <div className="form-group col-sm-3">
            <label className="label">
              <b>Add Product</b>
            </label>
          </div>
        </div>
      </div>

      <ButtonComponent
        icon={<i className="fa fa-plus form-control-feedback mr-3 fa-sm" />}
        label=" PRODUCT"
        type="prdbtn"
      />
      <ProductList />
    </div>
  );
};

export default DashBoard;

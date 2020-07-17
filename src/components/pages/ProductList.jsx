import React from "react";
import SelectComponent from "../common/SelectComponent";
import { useState } from "react";
import SearchComponent from "../common/SearchComponent";
import PaginationComponent from "./../common/Pagination";
import ButtonComponent from "./../common/ButtonComponent";

const ProductList = () => {
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
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12" style={{ marginTop: "10px" }}>
          <div className="row">
            <div className="form-group col-md-2">
              <SelectComponent
                type="refineDysSlct"
                options={options}
                onChange={handleChange}
                value={selectedOption}
                Placeholder="Refine By Days"
              />
            </div>
            <div className="form-group col-md-2">
              <SelectComponent
                type="refineKthnSlct"
                options={options}
                onChange={handleChange}
                value={selectedOption}
                Placeholder="RefineByKitchen"
              />
            </div>
            <div className="form-group has-search col-md-4">
              <SearchComponent
                type="text"
                placeholder="search item name"
                types="itemSrch"
              />
            </div>
            <div className="col-md-1"></div>
            <div className="form-group col-md-3">
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
        <div className="col-md-12 mt-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Item Type</th>
                <th scope="col">Kitchen Name</th>
                <th scope="col">City</th>
                <th scope="col">Zip Code</th>
                <th scope="col">Serving Days</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>
                    <i
                      className="fa fa-circle form-control-feedback mr-3 fa-lg"
                      style={{ color: "#BEBEBE" }}
                    />
                    Chicken Biriyani Chicken
                  </span>
                </td>
                <td>Main Course</td>
                <td>Syed Kitchen 5511</td>
                <td>Chicago</td>
                <td>60078</td>
                <td>Mon,Tue,Wed,Thu,Fri,Sat,Sun</td>
                <td style={{ color: "green" }}>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
        <PaginationComponent />
      </div>
    </React.Fragment>
  );
};

export default ProductList;

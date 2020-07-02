import React from "react";
import SelectComponent from "../common/SelectComponent";
import { useState } from "react";
import SearchComponent from "../common/SearchComponent";
import PaginationComponent from "./../common/Pagination";

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
      <div className="ml-3 col-md-10" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="form-group col-sm-3">
            {/* <select className="form-control">
              <option>Refine By Days</option>
              <option>2</option>
              <option>3</option>
            </select> */}
            <SelectComponent
              type="refineDysSlct"
              options={options}
              onChange={handleChange}
              value={selectedOption}
              Placeholder="Refine By Days"
            />
          </div>
          <div className="form-group col-sm-3">
            <SelectComponent
              type="refineKthnSlct"
              options={options}
              onChange={handleChange}
              value={selectedOption}
              Placeholder="Refine By Kitchen"
            />
          </div>
          <div className="form-group has-search col-sm-4 ml-5">
            <SearchComponent
              type="text"
              placeholder="search item name"
              types="itemSrch"
            />
          </div>
        </div>
      </div>
      <div className="col-sm-12 px-5 mt-3">
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
                <span className="dot" style={{ float: "left" }}></span>
                <span>Chicken Biriyani Chicken</span>
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
    </React.Fragment>
  );
};

export default ProductList;

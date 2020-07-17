import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PaginationComponent from "./../../common/Pagination";
import SearchComponent from "./../../common/SearchComponent";
import SelectComponent from "./../../common/SelectComponent";

const CustomerList = () => {
  const [options] = useState([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]);

  const [selectedOption] = useState(null);

  const handleChange = () => {
    return selectedOption;
  };

  const history = useHistory();

  const handleEdit = () => {
    return history.push("/customers/edit");
  };

  //   const handleEdit = (id) => {
  //     console.log(id);
  //     return history.push(`/registeredkitchen/${id}`);
  //   };
  return (
    <React.Fragment>
      <div className="container">
        <div className="mt-5 pt-4">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="label" style={{ color: "#306BF3" }}>
                <b>
                  <i className="fa fa-home form-control-feedback mr-3 fa-lg" />
                </b>
              </label>
              <label className="label" style={{ color: "#090C1C" }}>
                <b>Customer List</b>
              </label>
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
                Placeholder="Refine By State"
              />
            </div>
            <div className="form-group col-md-2">
              <SelectComponent
                type="refineKthnSlct"
                options={options}
                onChange={handleChange}
                value={selectedOption}
                Placeholder="Refine By City"
              />
            </div>
            <div className="form-group col-md-2">
              <SelectComponent
                type="refineKthnSlct"
                options={options}
                onChange={handleChange}
                value={selectedOption}
                Placeholder="RefineByZipCode"
              />
            </div>
            <div className="form-group col-md-2">
              <SelectComponent
                type="refineKthnSlct"
                options={options}
                onChange={handleChange}
                value={selectedOption}
                Placeholder="RefineByMealPlan"
              />
            </div>
            <div className="form-group has-search col-md-3">
              <SearchComponent
                type="text"
                placeholder="search by zip code"
                types="itemSrch"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12  mt-4">
          <table className="table">
            <thead>
              <tr>
                <th scop="col">Customer ID</th>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col">Zip Code</th>
                <th scope="col">Plates</th>
                <th scope="col">Meal Plan</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ cursor: "pointer" }} onClick={handleEdit}>
                  Syed Kitchen
                </td>
                <td>Illinois</td>
                <td>Chicago</td>
                <td>60076</td>
                <td>4/8</td>
                <td>2 Person - 4 Days</td>
                <td style={{ color: "green" }}>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <PaginationComponent />
    </React.Fragment>
  );
};
export default CustomerList;

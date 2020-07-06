import React from "react";
import SelectComponent from "../common/SelectComponent";
import { useState } from "react";
import SearchComponent from "../common/SearchComponent";
import PaginationComponent from "./../common/Pagination";
import ButtonComponent from "../common/ButtonComponent";
import AddZipCode from "./../common/AddZipCodePopup";

const DeliveryList = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [options] = useState([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]);

  const [selectedOption] = useState(null);

  const handleChange = () => {
    return selectedOption;
  };

  const handleModal = () => {
    return setModalOpen(true);
  };

  const closeModal = () => {
    return setModalOpen(!isModalOpen);
  };
  return (
    <React.Fragment>
      <div className="mt-5 pt-4">
        <div className="form-row ml-5">
          <div className="form-group col-xs-1">
            <label className="label" style={{ color: "#306BF3" }}>
              <b>
                <i className="fa fa-home form-control-feedback mr-3 fa-lg" />
              </b>
            </label>
            <label className="label" style={{ color: "#090C1C" }}>
              <b>Delivery zip codes & Serving Kitchen</b>
            </label>
          </div>
        </div>
      </div>
      <div className="ml-3 col-md-12" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="form-group col-sm-2 ml-3">
            <SelectComponent
              type="refineDysSlct"
              options={options}
              onChange={handleChange}
              value={selectedOption}
              Placeholder="Refine By State"
            />
          </div>
          <div className="form-group col-sm-2">
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
              placeholder="search by zip code"
              types="itemSrch"
            />
          </div>
          <div className="form-group col-sm-3">
            <ButtonComponent
              icon={
                <i className="fa fa-plus form-control-feedback mr-4 fa-sm" />
              }
              label="ZIP CODE"
              type="addZipBtn"
              onClick={handleModal}
            />
            <AddZipCode isModalOPen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
      <div className="col-sm-12 px-5 mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">State</th>
              <th scope="col">Zip Code</th>
              <th scope="col">Kitchen</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Illinios</td>
              <td>60077,78732,9090,22890</td>
              <td>syed Kitchen, Varun Kitchen,asif Kitchen</td>
              <td>
                <ButtonComponent type="deliveryActionBtn" label="Edit" />
              </td>
            </tr>
            <tr>
              <td>Illinios</td>
              <td>60077,78732,9090,22890</td>
              <td>syed Kitchen, Varun Kitchen,asif Kitchen</td>
              <td>
                <ButtonComponent type="deliveryActionBtn" label="Edit" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PaginationComponent />
    </React.Fragment>
  );
};

export default DeliveryList;

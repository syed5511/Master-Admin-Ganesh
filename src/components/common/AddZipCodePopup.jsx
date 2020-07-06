import React, { useState } from "react";
import {
  // Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import SelectComponent from "./SelectComponent";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import ButtonComponent from "./ButtonComponent";

const AddZipCode = ({ className, isModalOPen, closeModal }) => {
  const [fields, setFields] = useState([{ value: null }]);

  const [options] = useState([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]);

  const [selectedOption] = useState(null);

  // const toggle = () => {
  //   return setModal(!modal);
  // };

  const handleChange = () => {
    return selectedOption;
  };

  const handleAdd = () => {
    const values = [...fields];
    values.push({ value: null });
    return setFields(values);
  };

  const handleChangeField = (i, event) => {
    const values = [...fields];
    values[i].value = event.target.value;
    return setFields(values);
  };

  const handleRemove = (i) => {
    const values = [...fields];
    values.splice(i, 1);
    return setFields(values);
  };

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        click
      </Button> */}
      <Modal
        isOpen={isModalOPen}
        className={className}
        style={{
          width: "300px",
        }}
      >
        <ModalHeader style={{ borderBottom: "0px" }}>
          <label
            className="label  mb-0"
            style={{ font: "Bold 15px/20px Segoe UI" }}
          >
            ADD ZIP CODE & KITCHEN
            <i
              className="fa fa-times form-control-feedback fa-lg"
              style={{ marginLeft: "60px" }}
              onClick={closeModal}
            />
          </label>
        </ModalHeader>

        <ModalBody className="mt-0 py-0">
          <div className="row">
            <div className="col-sm-12">
              <ErrorAlert label="zip code already added" />
              <SuccessAlert label="successfully added" />
            </div>
            <div className="col-sm-12">
              <SelectComponent
                type="SlctState"
                options={options}
                onChange={handleChange}
                value={selectedOption}
                Placeholder="Select State"
              />
            </div>

            <div className="col-sm-12 mt-3">
              <label
                className="label"
                style={{ font: "Medium 14px/19px Roboto" }}
              >
                Enter Zip Codes
              </label>
              <textarea className="form-control" rows="3" type="text" />
            </div>
            <div className="col-sm-12 mt-3">
              <label
                className="label"
                style={{ font: "Medium 14px/19px Roboto" }}
              >
                Select Kitchens
              </label>
              <ButtonComponent
                label="Add"
                type="zipaddBtn"
                onClick={handleAdd}
              />
            </div>
          </div>

          {fields.map((field, id) => {
            return (
              <div key={`${field}-${id}`}>
                <div className="row">
                  <div className="form-group col-sm-11 mt-2">
                    <SelectComponent
                      type="Slctktchn"
                      options={options}
                      onChange={(e) => handleChangeField(id, e)}
                      value={selectedOption}
                      Placeholder="Select Kitchen"
                    />
                  </div>
                  <div>
                    <i
                      className="fa fa-times form-control-feedback"
                      style={{ marginTop: "15px" }}
                      onClick={() => handleRemove(id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </ModalBody>
        <ModalFooter style={{ borderTop: "0px" }}>
          <div className="col-sm-12">
            <ButtonComponent label="ADD ZIP CODE & KITCHEN" type="zipcodeBtn" />
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddZipCode;

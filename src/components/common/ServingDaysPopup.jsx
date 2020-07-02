import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import ButtonComponent from "./ButtonComponent";

const ServingDaysPopup = ({ className }) => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        click
      </Button> */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{
          width: "300px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          opacity: "1",
        }}
      >
        <ModalHeader toggle={toggle} style={{ borderBottom: "0px" }}>
          <div>
            <SuccessAlert label="saved successfully" />
            <ErrorAlert label="failed" />
          </div>
        </ModalHeader>

        <ModalBody className="mt-0 py-0">
          <div className="row">
            <div className="col-md-8">
              <label
                className="label ml-4 mb-0"
                style={{ font: "Bold 15px/20px Segoe UI" }}
              >
                Kitchen Name
              </label>
              <label className="mt-0 ml-4">Syed Kitchen 5511</label>
            </div>
            <div className="col-md-8">
              <label
                className="label ml-4 mb-0"
                style={{ font: "Bold 15px/20px Segoe UI" }}
              >
                Item Type
              </label>
              <label className="mt-0 ml-4">Main Course</label>
            </div>
            <div className="col-md-8">
              <label
                className="label ml-4 mb-0"
                style={{ font: "Bold 15px/20px Segoe UI" }}
              >
                Item Name
              </label>
              <label className="mt-0 ml-4">Chicken Biriyani</label>
            </div>
          </div>

          <div className="form-group">
            <div className="row mt-2">
              <label
                className="label"
                style={{ marginLeft: "40px", font: "Bold 15px/20px Segoe UI" }}
              >
                Serving Days
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input-sm"
                id="exampleCheck1"
                checked
              />
              <label className="form-check-label ml-2" for="exampleCheck1">
                Monday
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input-sm"
                id="exampleCheck1"
                checked
              />
              <label className="form-check-label ml-2" for="exampleCheck1">
                Tuesday
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input-sm"
                id="exampleCheck1"
              />
              <label className="form-check-label ml-2" for="exampleCheck1">
                Wednesday
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input-sm"
                id="exampleCheck1"
              />
              <label className="form-check-label ml-2" for="exampleCheck1">
                Thursaday
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input-sm"
                id="exampleCheck1"
              />
              <label className="form-check-label ml-2" for="exampleCheck1">
                Friday
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input-sm"
                id="exampleCheck1"
              />
              <label className="form-check-label ml-2" for="exampleCheck1">
                Saturday
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input-sm"
                id="exampleCheck1"
              />
              <label className="form-check-label ml-2" for="exampleCheck1">
                Sunday
              </label>
            </div>
          </div>
        </ModalBody>
        <ModalFooter style={{ borderTop: "0px" }}>
          {/* <Button
            color="light btn-sm"
            onClick={toggle}
            style={{
              width: "100px",
              background: "#E8EAF2 0% 0% no-repeat padding-box",
              borderRadius: "5px",
              opacity: "1",
            }}
          >
            Cancel
          </Button>{" "} */}
          <ButtonComponent
            onClick={toggle}
            label="Cancel"
            type="servingDaysCancelBtn"
          />
          {/* <Button
            color="dark btn-sm"
            onClick={toggle}
            style={{
              width: "100px",
              background: "#161A34 0% 0% no-repeat padding-box",
              boxShadow: "0px 11px 16px #20275669",
              borderRadius: "5px",
              opacity: "1",
            }}
          >
            Save
          </Button> */}
          <ButtonComponent label="Save" type="servingDaysBtn" />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ServingDaysPopup;

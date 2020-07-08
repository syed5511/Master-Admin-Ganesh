import React from "react";

const DetailCustomer = () => {
  return (
    <React.Fragment>
      <div className="mt-4 mx-3">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <label
                className="label ml-4 mb-0"
                style={{
                  color: "#140E06",
                  font: "Bold 13px/16px Segoe UI",
                }}
              >
                Full Name
              </label>
            </div>
            <div className="row">
              <label
                className="label mt-0 ml-4"
                style={{
                  color: "#777572",
                  font: "Regular 10px/15px Segoe UI",
                }}
              >
                Syed Kitchen
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <label
                className="label ml-4 mb-0"
                style={{
                  color: "#140E06",
                  font: "Bold 13px/16px Segoe UI",
                }}
              >
                Email Address
              </label>
            </div>
            <div className="row">
              <label
                className="label mt-0 ml-4"
                style={{
                  color: "#777572",
                  font: "Regular 10px/15px Segoe UI",
                }}
              >
                Syed@gmail.com
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <label
                className="label ml-4 mb-0"
                style={{
                  color: "#140E06",
                  font: "Bold 13px/16px Segoe UI",
                }}
              >
                Phone
              </label>
            </div>
            <div className="row">
              <label
                className="label mt-0 ml-4"
                style={{
                  color: "#777572",
                  font: "Regular 10px/15px Segoe UI",
                }}
              >
                408-854-0221
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="row">
              <label
                className="label ml-4 mb-0"
                style={{
                  color: "#140E06",
                  font: "Bold 13px/16px Segoe UI",
                }}
              >
                Delivery Address
              </label>
            </div>
            <div className="row">
              <label
                className="label mt-0 ml-4"
                style={{
                  color: "#777572",
                  font: "Regular 10px/15px Segoe UI",
                }}
              >
                <div className="row ml-0">
                  8878 Santa Monica, Illinois, Chicago, 60078
                  <span className="ml-3">
                    Residential -
                    <span style={{ color: "#DE901B" }}>Default</span>
                  </span>
                </div>

                <div className="row ml-0">
                  3344 Talman Ave, Illinois, Chicago, 60078
                  <span className="ml-4">Office Suit 102</span>
                </div>
                <div className="row ml-0">
                  3344 Talman Ave, Illinois, Chicago, 60078
                  <span className="ml-4">School</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="row">
              <label
                className="label ml-4 mb-0"
                style={{
                  color: "#140E06",
                  font: "Bold 13px/16px Segoe UI",
                }}
              >
                Joined Date
              </label>
            </div>
            <div className="row">
              <label
                className="label mt-0 ml-4"
                style={{
                  color: "#777572",
                  font: "Regular 10px/15px Segoe UI",
                }}
              >
                3/16/2020 <sapn className="ml-3">8:30pm</sapn>
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <label
                className="label ml-4 mb-0"
                style={{
                  color: "#140E06",
                  font: "Bold 13px/16px Segoe UI",
                }}
              >
                Stripe ID
              </label>
            </div>
            <div className="row">
              <label
                className="label mt-0 ml-4"
                style={{
                  color: "#777572",
                  font: "Regular 10px/15px Segoe UI",
                }}
              >
                55667788907654322
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row ml-4">
              <div className="row">
                <label
                  className="label  mb-0"
                  style={{
                    color: "#140E06",
                    font: "Bold 13px/16px Segoe UI",
                  }}
                >
                  Status
                </label>
              </div>
            </div>
            <div className="row">
              <div className="custom-control custom-switch">
                <label className="pr-5">Off</label>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  checked
                />
                <label className="custom-control-label" for="customSwitch1">
                  On
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailCustomer;

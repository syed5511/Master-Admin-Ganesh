import React from "react";
import DetailCustomer from "./DetailCustomer";

const CustomerDetail = () => {
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
              <b>Registered Customers</b>
            </label>
          </div>
          <div className="form-group col-xs-1">
            <label className="label" style={{ color: "#FF991F" }}>
              <b>Customer Details</b>
            </label>
          </div>
        </div>
      </div>
      <div className="ml-4 col-sm-12" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="form-group col-sm-3 ml-3">
            <label
              className="label"
              style={{ color: "#140E06", font: "Bold 13px/16px Segoe UI" }}
            >
              <b>Customer ID</b>
            </label>
            <label
              className="label ml-4"
              style={{ color: "#777572", font: "Regular 5px/12px Segoe UI" }}
            >
              <b>syed@gmail.com</b>
            </label>
          </div>
        </div>
      </div>
      <div className="col-md-12 ml-4">
        <div className="row">
          <div
            className="form-group col-sm-2 ml-4"
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              border: "1px solid #EBEBEB",
              borderRadius: "6px",
              opacity: "1",
              height: "250px",
            }}
          >
            <label
              className="my-4 mx-4 label"
              style={{
                textAlign: "start",
                font: "Bold 14px/20px Roboto",
                letterSpacing: "0px",
                color: "#241604",
                cursor: "pointer",
              }}
            >
              <b style={{ color: "#FF991F" }}>Customer Details</b>
              <br />
              <b>Subscriptions</b>
              <br />
              <b>Orders</b>
              <br />
              <b>Loyalty Tokens</b>
              <br />
              <b>Rating & Reviews</b>
              <br />
              <b>Feedbacks</b>
              <br />
              <b>Notes</b>
              <br />
              <b></b>
              <br />
              <b>
                Status-<span style={{ color: "green" }}>Active</span>
              </b>
            </label>
          </div>
          <div
            className="col-sm-6 ml-3"
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              border: "1px solid #EBEBEB",
              borderRadius: "6px",
              opacity: "1",
              height: "250px",
            }}
          >
            <DetailCustomer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomerDetail;

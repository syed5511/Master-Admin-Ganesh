import React from "react";

const ProductList = () => {
  return (
    <React.Fragment>
      <div className="ml-4 col-md-10" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="form-group col-sm-3">
            <select className="form-control">
              <option>Refine By Days</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="col-sm-3">
            <select className="form-control">
              <option>Refine By Kitchen</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="form-group has-search col-sm-4 ml-5">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              placeholder="search item name"
              style={{
                border: "1px solid #306BF3",
                backgroundColor: "#FFFFFF 0% 0% no-repeat padding-box",
                borderRadius: "4px",
                opacity: "1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-12 px-5 mt-2">
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
                <div className="custom-control custom-checkbox">
                  <input
                    className="form-check-input px-2"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label">
                    Chicken Biriyani Chicken
                  </label>
                </div>
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
    </React.Fragment>
  );
};

export default ProductList;

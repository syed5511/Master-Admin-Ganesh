import React, { useState } from "react";
import { withRouter } from "react-router";

import Form from "../../common-components/Form";
import form from "./config/form";
import loadImage from "./utils/loadImage";
import { Row, Col, ImagePreview } from "./styles";

const AddProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onFormChange = (v) => {
    if (v.product_image !== selectedImage) {
      setSelectedImage(v.product_image);
      loadImage(
        document.getElementById("product_image"),
        document.getElementById("previewProductImage")
      );
    }
  };

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={8} className="form-container">
          <Form form={form} getValues={onFormChange} />
        </Col>
        <Col xs={12} sm={12} md={4}>
          <ImagePreview
            id="previewProductImage"
            src="http://placehold.it/180"
          />
        </Col>
      </Row>
    </>
  );
};

export default withRouter(AddProductPage);

import React from "react";
import { string, shape } from "prop-types";
import Image from "react-bootstrap/Image";

const PlaceholderImage = ({ width, height, shape }) => (
  <Image src={`holder.js/${width}x${height}`} {...shape} />
);

PlaceholderImage.propTypes = {
  width: string,
  height: string,
  shape: shape({}),
};

PlaceholderImage.defaultProps = {
  width: "60",
  height: "60",
  shape: { roundedCircle: true },
};

export default PlaceholderImage;

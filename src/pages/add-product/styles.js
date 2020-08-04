import styled from "styled-components";
import BRow from "react-bootstrap/Row";
import BCol from "react-bootstrap/Col";

export const Row = styled(BRow)`
  margin-bottom: 24px;
`;

export const Col = styled(BCol)`
  &.form-container {
    background-color: #f3f3f3;
    border: 1px solid #e1e1e1;
    padding: 16px;
    border-radius: 5px;
  }
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 280px;
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  padding: 3px;
`;

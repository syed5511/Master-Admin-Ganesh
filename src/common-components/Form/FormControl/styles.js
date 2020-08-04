import styled from "styled-components";
import Col from "react-bootstrap/Col";

export const GridCol = styled(Col)`
  padding: 0 8px;
  margin-top: 8px;
  .form-check {
    padding-left: 24px;
    margin: 0;
  }
  .form-check-input {
    width: 19px;
    height: 19px;
    background: #ffffff;
    border: 1px solid #545d7a;
    border-radius: 3px;
    left: 0;
    top: 3px;
    margin-left: 0;
    margin-top: 0;
  }
  .form-check-label {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #212f4d;
  margin-bottom: 4px;
`;

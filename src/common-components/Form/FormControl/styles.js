import styled from "styled-components";
import Col from "react-bootstrap/Col";

export const GridCol = styled(Col)`
  padding: 0 8px;
  margin-top: 8px;
  .form-check {
    padding-left: 24px;
    margin: 0;
  }
  .form-control:focus,
  .custom-select:focus {
    border-color: inherit;
    box-shadow: none;
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

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  &.inline,
  &.inlineHalf {
    flex-direction: row;
    align-items: center;
    & > label {
      margin-bottom: 0;
      margin-right: 4px;
    }
  }
  &.inlineHalf {
    & > * {
      flex: 1 1 50%;
    }
  }
`;

export const SelectedFile = styled.div`
  font-size: 12px;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
`;

export const ControlContainer = styled.div`
  width: 100%;
  &.error {
    .form-control {
      border: 1px solid red;
    }
  }
`;

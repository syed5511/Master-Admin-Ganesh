import styled from "styled-components";
import BCol from "react-bootstrap/Col";

export const Col = styled(BCol)`
  padding-left: 6px;
  padding-right: 6px;
  .picky__dropdown li {
    padding: 8px;
    .form-check {
      margin: 0 !important;
      .form-check-input {
        margin: 0;
        width: 16px;
        margin-right: 4px !important;
        height: 16px;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  .add {
    padding: 3px 12px;
    height: 24px;
    line-height: 1.5;
    margin-left: 0;
    margin-top: -4px;
    margin-bottom: 4px;
  }
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
`;

export const Remove = styled.div`
  cursor: pointer;
  color: red;
  margin-left: 8px;
`;

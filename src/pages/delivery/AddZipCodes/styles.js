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
  margin-top: 12px;
  .add {
    padding: 3px 12px;
    height: 24px;
    line-height: 1.5;
    margin-left: 0;
    margin-top: -4px;
    margin-bottom: 4px;
    background: transparent;
    color: #161a34;
    font-weight: bold;
    border: none;
    &:hover {
      box-shadow: none;
      text-decoration: underline;
    }
  }
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
  display: flex;
  padding: 0 8px;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  margin: 4px 0;
  &.label-group {
    width: calc(88% - 16px);
  }
  &.repeating-group {
    & > div {
      width: 40%;
      &:first-child {
        margin-right: 16px;
      }
      &:last-child {
        width: inherit;
      }
    }
  }
`;

export const Remove = styled.div`
  cursor: pointer;
  color: red;
  width: 10px;
  height: 24px;
  margin-top: 8px;
  margin-left: 8px;
`;

export const SmallLabel = styled.div`
  font-size: 11px;
  flex: 1 1 50%;
  &:first-child {
    margin-right: 16px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
`;

import styled from "styled-components";
import BSButton from "react-bootstrap/Button";

export const BButton = styled(BSButton)`
  box-shadow: none;
  border-radius: 5px;
  font-size: 12px;
  line-height: 25px;

  &:hover {
    box-shadow: 0px 11px 16px #20275669;
  }

  &.submit,
  &.edit {
    background: #161a34;
    border: 1px solid #161a34;
    padding: 8px 48px;
    &:active {
      background: #161a34d1 !important;
      border: 1px solid #161a34d1 !important;
      box-shadow: none !important;
    }
    &:focus {
      box-shadow: none !important;
    }
  }
  &.submit {
    margin-left: 8px;
  }
  &.cancel {
    background: #ffffff;
    border: 1px solid #979797;
    color: #161a34;
    padding: 8px 16px;
    &:active {
      background: #f6f6f6 !important;
      border: 1px solid #ffffffd1 !important;
      box-shadow: none !important;
      border: 1px solid #979797 !important;
      color: #161a34 !important;
    }
    &:focus {
      box-shadow: none !important;
      border: 1px solid #979797 !important;
      color: #161a34 !important;
    }
  }
`;

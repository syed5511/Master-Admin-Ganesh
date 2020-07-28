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

  &.submit {
    background: #161a34;
    border: 1px solid #161a34;
    padding: 8px 48px;
    margin-left: 8px;
    &:active {
      background: #161a34d1 !important;
      border: 1px solid #161a34d1 !important;
      box-shadow: none !important;
    }
    &:focus {
      box-shadow: none !important;
    }
  }
  &.edit {
    background: #fff;
    border: 2px solid #e9891b;
    padding: 8px 48px;
    color: #e9891b !important;
    &:active {
      background: #e9891b !important;
      border: 2px solid #e9891b !important;
      box-shadow: none !important;
      color: #fff !important;
    }
    &:focus {
      box-shadow: none !important;
      background: #e9891b !important;
      color: #fff !important;
      border: 2px solid #e9891b !important;
    }
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

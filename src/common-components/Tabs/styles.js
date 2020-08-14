import styled from "styled-components";

export const TabContainer = styled.div`
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 6px;
  padding: 12px 24px;
`;

export const UL = styled.div`
  margin: 0;
  list-style: none;
  padding: 0;
  outline: none;
`;

export const LI = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: #241604;
  cursor: pointer;
  margin: 4px 0;
  font-family: Roboto Medium, Arial, Helvetica Neue, sans-serif;
  &.active {
    color: #ff991f;
  }
`;

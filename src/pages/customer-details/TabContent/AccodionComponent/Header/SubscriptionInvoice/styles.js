import styled from "styled-components";

export const Container = styled.div``;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  &.total {
    margin: 8px 0;
  }
`;

export const Label = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: #7978a1;
  flex: 1 1 50%;
  &.black {
    color: #061124;
    flex: 1 1 100%;
  }
  &.bold {
    font-weight: bold;
  }
  &.m-t-8 {
    margin-top: 8px;
  }
`;

export const Value = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: #7978a1;
  flex: 1 1 50%;
  &.bold {
    font-weight: bold;
  }
`;

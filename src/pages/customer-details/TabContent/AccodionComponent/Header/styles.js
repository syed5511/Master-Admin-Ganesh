import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Detail = styled.div`
  display: flex;
  padding-right: 24px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #140e06;
  padding-right: 8px;
`;

export const Value = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #777572;
  padding-left: 0;
  &.orange {
    color: #f19924;
  }
`;

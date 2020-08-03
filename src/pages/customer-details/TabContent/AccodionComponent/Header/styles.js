import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
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

export const ComplementaryButton = styled.button`
  background: #ebebeb;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 3px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #75716b;
  border: none;
  text-shadow: 0px 3px 6px #00000029;
  margin-right: 8px;
  &:active {
    box-shadow: none;
  }
  &:focus {
    outline: none;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

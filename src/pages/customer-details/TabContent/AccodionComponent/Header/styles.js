import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
`;

export const Detail = styled.div`
  display: flex;
  padding-right: 12px;
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
  margin: 0 8px;
  padding: 4px;
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

export const InvoiceDetails = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ff991f;
  font-weight: bold;
  background-color: #fff;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

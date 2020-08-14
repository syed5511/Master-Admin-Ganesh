import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Detail = styled.div`
  display: flex;
  padding-right: 12px;
  align-items: flex-start;
`;

export const Label = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #fff;
  padding-right: 8px;
  color: #f1f1f1;
  font-family: Roboto Medium, Arial, Helvetica Neue, sans-serif;
`;

export const Value = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #fff;
  padding-left: 0;
  &.order_id {
    color: #eccc2a;
  }
  &.delivery_date {
    color: #f1ede8;
  }
  &.delivery_time_slot {
    color: #f3f0eb;
    font-weight: bold;
  }
  &.delivery_time {
    color: #8dd279;
  }
`;

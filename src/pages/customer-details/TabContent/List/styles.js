import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 6px;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Detail = styled.div`
  display: flex;
  padding-right: 24px;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 0 33.33%;
  margin-bottom: 16px;
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #140e06;
  padding-right: 8px;
`;

export const Value = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #777572;
  padding-left: 0;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: calc(100% + 16px);
  margin-left: -8px;
  padding: 8px;
  border-top: 1px solid #ebebeb;
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-right: 30px;
`;

export const Label = styled.div`
  color: #000;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
`;

export const Value = styled.div`
  font-weight: normal;
  color: #75716b;
  line-height: 19px;
  font-size: 14px;
`;

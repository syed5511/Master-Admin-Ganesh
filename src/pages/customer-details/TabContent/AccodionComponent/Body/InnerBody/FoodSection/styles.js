import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Group = styled.div`
  display: flex;
  padding: 8px 4px;
  flex: 1 1 33.33%;
`;

export const Image = styled.div`
  width: 74px;
  margin-right: 4px;
  border: 1px solid #ebebeb;
  max-height: 54px;
`;

export const Content = styled.div``;

export const Item = styled.div`
  color: #75716b;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
`;

export const Quantity = styled(Item)`
  font-weight: normal;
`;

export const Type = styled(Quantity)``;

import styled from "styled-components";

export const NameWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.a`
  font-size: 14px;
  line-height: 19px;
  color: #1d67e8 !important;
  &:hover {
    cursor: pointer;
    text-decoration: underline !important;
  }
`;

export const Placeholder = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background-color: #aaa;
  margin-right: 24px;
`;

export const Status = styled.div`
  color: #f37070;
  &.Active {
    color: #7fb430;
  }
`;

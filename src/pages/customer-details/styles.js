import styled from "styled-components";

export const MajorDetails = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  &.column {
    flex-direction: column;
    align-items: flex-start;
    flex: 0 0 33.33%;
    margin-bottom: 16px;
  }
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
  padding-left: 8px;
  &.content {
    padding-left: 0;
  }
`;

export const TabContainer = styled.div`
  margin-top: 24px;
  display: flex;
  & > div {
    flex: 1;
    &:first-child {
      margin-right: 24px;
      flex: 0 0 233px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

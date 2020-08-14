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
  font-size: 14px;
  line-height: 16px;
  color: #140e06;
  margin-bottom: 4px;
  padding-right: 8px;
  font-family: Roboto Medium, Arial, Helvetica Neue, sans-serif;
`;

export const Value = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #777572;
  padding-left: 0;
  &.content {
    padding-left: 0;
  }
`;

export const TabContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  & > div {
    flex: 1;
    &:first-child {
      margin-right: 8px;
      flex: 0 0 188px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TabContent = styled.div`
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 6px;
  padding: 18px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

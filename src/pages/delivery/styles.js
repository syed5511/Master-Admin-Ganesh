import styled from "styled-components";
import BButton from "../../common-components/Button";

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  & > div {
    flex: 1;
  }
`;

export const Button = styled(BButton)`
  &.add-product {
    padding: 4px 12px !important;
  }
`;
